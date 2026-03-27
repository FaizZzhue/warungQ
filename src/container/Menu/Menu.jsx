import { menuItems } from "../../constans/menu";
import useCart from "../../hooks/useCart";
import FeaturedMenu from "./FeaturedMenu";
import MenuContent from "./MenuContent";


const Menu = () => {
    const { cart, addToCart, total } = useCart();

    return (
        <section className="relative overflow-hidden mt-6 px-4 md:px-6">
            <div className="mx-auto max-w-6xl">
                <h1 className="text-center text-2xl font-bold mb-6 text-primary">
                    Menu Unggulan
                </h1>

                <FeaturedMenu data={menuItems} />

                <MenuContent
                    data={menuItems}
                    cart={cart}
                    total={total}
                    addToCart={addToCart}
                />
            </div>
        </section>
    )
}

export default Menu;