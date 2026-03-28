import useFilter from "../../hooks/useFilter";
import CategoryFilter from "./CategoryFilter";
import MenuList from "./MenuList";
import CartSummary from "../Cart/CartSummary";

const MenuContent = ({
    data,
    cart,
    subtotal,
    discountAmount,
    discountPercentage,
    total,
    addToCart,
    removeFromCart,
    removeQuantity
}) => {
    const { activeCategory, setActiveCategory, filterByCategory } = useFilter();
    const filteredData = filterByCategory(data);

    return (
        <div className="mt-8">
            <CategoryFilter
                activeCategory={activeCategory}
                setCategory={setActiveCategory}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-8">
                    <MenuList
                        data={filteredData}
                        addToCart={addToCart}
                    />
                </div>

                <div className="lg:col-span-4">
                    <div className="lg:sticky lg:top-24">
                        <CartSummary
                            cart={cart}
                            subtotal={subtotal}
                            discountAmount={discountAmount}
                            discountPercentage={discountPercentage}
                            total={total}
                            removeQuantity={removeQuantity}
                            removeFromCart={removeFromCart}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuContent;