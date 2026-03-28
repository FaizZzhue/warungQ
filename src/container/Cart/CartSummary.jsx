import { useRef, useState } from "react";
import { FiMinus, FiTrash2 } from "react-icons/fi";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

const CartSummary = ({
    cart = [],
    subtotal = 0,
    discountAmount = 0,
    discountPercentage = 0,
    total = 0,
    onSubmitOrder,
    removeQuantity,
    removeFromCart,
}) => {
    const [tableNumber, setTableNumber] = useState("");
    const [showTableInput, setShowTableInput] = useState(false);
    const inputRef = useRef(null);

    const handleOrderClick = () => {
        if (!tableNumber.trim()) {
            setShowTableInput(true);
            setTimeout(() => {
                inputRef.current?.focus();
            }, 0);
            return;
        }

        if (onSubmitOrder) {
            onSubmitOrder({ cart, total, tableNumber });
        }
    };

    return (
        <Card className="w-full border border-primary-dark p-4">
            <h2 className="font-semibold mb-4">
                Pesanan kamu
            </h2>

            <div className="flex flex-col gap-4 mb-4">
                {cart.length === 0 ? (
                    <p className="text-sm text-gray-400">
                        Belum ada pesanan
                    </p>
                ) : (
                    cart.map((item) => (
                        <div key={item.id} className="flex justify-between gap-3">
                            <div className="flex-1 min-w-0">
                                <p className="font-medium">{item.name}</p>
                                <span className="text-sm text-gray-500">
                                    x{item.quantity}
                                </span>
                            </div>

                            <div className="flex flex-col items-end gap-2 shrink-0">
                                <p className="font-medium text-right">
                                    Rp {(item.price * item.quantity).toLocaleString()}
                                </p>

                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="outline"
                                        shape="circle"
                                        onClick={() => removeQuantity(item.id)}
                                        disabled={item.quantity <= 1}
                                    >
                                        <FiMinus className="text-sm" />
                                    </Button>

                                    <Button
                                        variant="danger"
                                        shape="circle"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        <FiTrash2 className="text-sm" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="flex flex-col gap-2 mb-4 pt-2">
                <div className="flex justify-between items-center">
                    <p className="font-medium">Subtotal</p>
                    <p className="font-medium">Rp {subtotal.toLocaleString()}</p>
                </div>

                {discountPercentage > 0 && (
                    <div className="flex justify-between items-center text-green-600">
                        <p className="font-medium">Diskon 20%</p>
                        <p className="font-medium">
                            - Rp {discountAmount.toLocaleString()}
                        </p>
                    </div>
                )}

                <div className="flex justify-between items-center">
                    <p className="font-semibold">Total</p>
                    <p className="font-semibold text-primary">
                        Rp {total.toLocaleString()}
                    </p>
                </div>
            </div>

            {showTableInput && (
                <div className="mt-2 text-center mb-3">
                    <p className="text-xs text-gray-400 mb-1">Nomor Meja</p>
                    <input
                        ref={inputRef}
                        type="number"
                        placeholder="Contoh: 5"
                        value={tableNumber}
                        onChange={(e) => setTableNumber(e.target.value)}
                        className="w-full text-center text-sm border border-gray-300 rounded-md py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                </div>
            )}

            <Button
                variant="primary"
                className="w-full rounded-lg"
                disabled={cart.length === 0}
                onClick={handleOrderClick}
            >
                Pesan sekarang
            </Button>
        </Card>
    );
};

export default CartSummary;