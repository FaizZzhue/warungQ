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
            prevCart.map((item) =>
                item.id === itemId
                    ? {
                            ...item,
                            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
                    } : item
            )
        );
    };

    const removeFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    };

    const hasFood = cart.some(item => item.category === "Makanan");
    const hasDrink = cart.some(item => item.category === "Minuman");

    const isEligibleForDiscount = hasFood && hasDrink;

    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const discountPercentage = isEligibleForDiscount ? 20 : 0;

    const discountAmount = subtotal * (discountPercentage / 100);

    const total = subtotal - discountAmount;

    return {
        cart,
        addToCart,
        removeQuantity,
        removeFromCart,
        subtotal,
        discountPercentage,
        discountAmount,
        total,
        isEligibleForDiscount
    };
};

export default useCart;