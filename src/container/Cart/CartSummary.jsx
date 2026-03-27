import { useRef, useState } from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";

const CartSummary = ({ cart = [], total = 0, onSubmitOrder }) => {
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
        <Card className="w-full border border-primary/30 p-4">
            <h2 className="font-semibold mb-4">
                Pesanan kamu
            </h2>

            <div className="flex flex-col gap-3 mb-4">
                {cart.length === 0 ? (
                    <p className="text-sm text-gray-400">
                        Belum ada pesanan
                    </p>
                ) : (
                    cart.map((item) => (
                        <div key={item.id} className="flex justify-between">
                            <div>
                                <p className="font-medium">{item.name}</p>
                                <span className="text-sm text-gray-500">
                                    x{item.quantity}
                                </span>
                            </div>

                            <p className="font-medium">
                                Rp {(item.price * item.quantity).toLocaleString()}
                            </p>
                        </div>
                    ))
                )}
            </div>

            <div className="flex justify-between items-center mb-4">
                <p className="font-semibold">Total</p>
                <p className="font-semibold text-primary">
                    Rp {total.toLocaleString()}
                </p>
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