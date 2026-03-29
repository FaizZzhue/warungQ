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
    removeQuantity,
    removeFromCart,
    onResetCart,
}) => {
    const [tableNumber, setTableNumber] = useState("");
    const [toast, setToast] = useState(false);
    const inputRef = useRef(null);

    const isTableFilled = tableNumber.trim() !== "";
    const canSubmit = cart.length > 0 && isTableFilled;

    const handleOrderClick = () => {
        if (!isTableFilled) {
            inputRef.current?.focus();
            return;
        }

        setToast(true);

        setTimeout(() => {
            setToast(false);
            setTableNumber("");
            if (onResetCart) onResetCart();
        }, 2500);
    };

    return (
        <Card className="w-full border border-primary-dark p-4 relative">
            {toast && (
                <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-primary text-white text-sm px-4 py-2 rounded-lg shadow-lg z-[999] whitespace-nowrap">
                    Pesanan diterima! Terima kasih 🍛
                </div>
            )}

            <h2 className="font-semibold mb-4">Pesanan kamu</h2>

            <div className="flex flex-col gap-4 mb-4">
                {cart.length === 0 ? (
                    <p className="text-sm text-gray-400">Belum ada pesanan</p>
                ) : (
                    cart.map((item) => (
                        <div key={item.id} className="flex justify-between gap-3">
                            <div className="flex-1 min-w-0">
                                <p className="font-medium">{item.name}</p>
                                <span className="text-sm text-gray-500">x{item.quantity}</span>
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

            <div className="flex flex-col gap-2 mb-4 pt-2 border-t border-gray-100">
                <div className="flex justify-between items-center">
                    <p className="font-medium">Subtotal</p>
                    <p className="font-medium">Rp {subtotal.toLocaleString()}</p>
                </div>

                {discountPercentage > 0 && (
                    <div className="flex justify-between items-center text-green-600">
                        <p className="font-medium">Diskon {discountPercentage}%</p>
                        <p className="font-medium">- Rp {discountAmount.toLocaleString()}</p>
                    </div>
                )}

                <div className="flex justify-between items-center">
                    <p className="font-semibold">Total</p>
                    <p className="font-semibold text-primary">Rp {total.toLocaleString()}</p>
                </div>
            </div>

            <div className="mb-3">
                <label className="text-xs text-gray-500 mb-1 block">Nomor Meja</label>
                <input
                    ref={inputRef}
                    type="number"
                    placeholder="Nomor Meja : 18"
                    value={tableNumber}
                    onChange={(e) => setTableNumber(e.target.value)}
                    className="w-full text-center text-sm border border-gray-300 rounded-lg py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                />

                {!isTableFilled && cart.length > 0 && (
                    <p className="text-xs text-danger mt-1">
                        Isi nomor meja terlebih dahulu
                    </p>
                )}
            </div>

            <Button
                variant="primary"
                shape="rounded"
                disabled={!canSubmit}
                onClick={handleOrderClick}
            >
                Pesan sekarang
            </Button>
        </Card>
    );
};

export default CartSummary;