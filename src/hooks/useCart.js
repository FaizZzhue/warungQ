import { useState } from "react";

const useCart = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, qty = 1) => {
        setCart((prevCart) => {
            const existing = prevCart.find((i) => i.id === item.id);

            if (existing) {
                return prevCart.map((i) =>
                    i.id === item.id
                        ? { ...i, quantity: i.quantity + qty }
                        : i
                );
            }

            return [...prevCart, { ...item, quantity: qty }];
        });
    };

    const removeQuantity = (itemId) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === itemId
                        ? { ...item, quantity: item.quantity > 1 
                            ? item.quantity - 1 
                            : 1 
                        } : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const removeFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    };

    const total = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return { cart, addToCart, removeQuantity, removeFromCart, total };
};

export default useCart;