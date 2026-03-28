import { menuItems } from "../../constans/menu";
import FeaturedMenu from "./FeaturedMenu";
import MenuContent from "./MenuContent";

const Menu = ({
    cart,
    addToCart,
    removeQuantity,
    removeFromCart,
    subtotal,
    discountAmount,
    discountPercentage,
    total
}) => {
    return (
        <section
            id="menu"
            className="relative overflow-hidden mt-6 px-4 md:px-6 scroll-mt-24"
        >
            <div className="mx-auto max-w-6xl">
                <h1 className="text-center text-2xl font-heading font-bold mb-6 text-primary">
                    Menu Unggulan
                </h1>

                <FeaturedMenu data={menuItems} />

                <h1 className="text-center text-2xl font-heading font-bold mb-6 text-primary">
                    Pesan Sekarang
                </h1>

                <MenuContent
                    data={menuItems}
                    cart={cart}
                    addToCart={addToCart}
                    removeQuantity={removeQuantity}
                    removeFromCart={removeFromCart}
                    subtotal={subtotal}
                    discountAmount={discountAmount}
                    discountPercentage={discountPercentage}
                    total={total}
                />
            </div>
        </section>
    );
};

export default Menu;