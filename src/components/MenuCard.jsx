import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import Card from "./Card";
import Button from "./Button";
import Badge from "./Badge";

const MenuCard = ({ item, toggleFavorite, isFavorite, addToCart }) => {
    const [qty, setQty] = useState(1);

    const increment = () => setQty((prev) => prev + 1);

    const decrement = () => {
        setQty((prev) => (prev > 1 ? prev - 1 : 1));
    };

    const handleAddToCart = () => {
        addToCart(item, qty);
    };

    return (
        <Card
            variant="default"
            className="relative p-4 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
        >
            <div className="flex items-start justify-between mb-3">
                <div className="text-3xl">{item.emoji}</div>

                <button
                    onClick={() => toggleFavorite(item)}
                    className="bg-primary-light p-2 rounded-full hover:scale-110 transition flex items-center justify-center"
                >
                    {isFavorite ? (
                        <FaHeart className="text-primary text-lg" />
                    ) : (
                        <FiHeart className="text-primary text-lg" />
                    )}
                </button>
            </div>

            <div className="flex flex-col gap-1 mb-3">
                <h2 className="font-semibold text-base">{item.name}</h2>

                <p className="text-sm text-gray-500 line-clamp-2">
                    {item.description}
                </p>

                <p className="text-primary font-semibold">
                    Rp {item.price.toLocaleString()}
                </p>
            </div>

            <div className="flex items-center gap-2 mb-3">
                {!item.stock ? (
                    <Badge variant="danger">Habis</Badge>
                ) : item.badge ? (
                    <Badge variant="primary">{item.badge}</Badge>
                ) : null}
            </div>

            {item.stock ? (
                <div className="flex flex-col gap-3 mt-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Button
                                variant="outline"
                                shape="circle"
                                onClick={decrement}
                            >
                                -
                            </Button>

                            <span className="font-medium">{qty}</span>

                            <Button
                                variant="outline"
                                shape="circle"
                                onClick={increment}
                            >
                                +
                            </Button>
                        </div>
                    </div>

                    <Button
                        variant="primary"
                        className="w-full rounded-lg"
                        onClick={handleAddToCart}
                    >
                        + Tambah
                    </Button>
                </div>
            ) : (
                <p className="text-gray-400 text-sm mt-auto">
                    Tidak tersedia
                </p>
            )}
        </Card>
    );
};

export default MenuCard;