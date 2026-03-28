import { menuItems } from "../../constans/menu";
import FeaturedMenu from "./FeaturedMenu";
import MenuContent from "./MenuContent";

const Menu = ({ cart, addToCart, removeQuantity, removeFromCart,total }) => {
    return (
        <section 
            id="menu"
            className="relative overflow-hidden mt-6 px-4 md:px-6"
        >
            <div className="mx-auto max-w-6xl">
                <h1 className="text-center text-2xl font-heading font-bold mb-6 text-primary underline underline-offset-8 decoration-primary/70">
                    Menu Unggulan
                </h1>

                <FeaturedMenu data={menuItems} />

                <h1 className="text-center text-2xl font-heading font-bold mb-6 text-primary underline underline-offset-8 decoration-primary/70">
                    Pesan Sekarang
                </h1>

                <MenuContent
                    data={menuItems}
                    cart={cart}
                    total={total}
                    addToCart={addToCart}
                    removeQuantity={removeQuantity}
                    removeFromCart={removeFromCart}
                />
            </div>
        </section>
    );
};

export default Menu;