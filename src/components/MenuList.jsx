import useFavorite from "../hooks/useFavorite";
import MenuCard from "./MenuCard";

const MenuList = ({ data, addToCart }) => {
    const { toggleFavorite, isFavorite } = useFavorite();

    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {data.map((item) => (
                <MenuCard
                    key={item.id}
                    item={item}
                    toggleFavorite={toggleFavorite}
                    isFavorite={isFavorite(item.id)}
                    addToCart={addToCart}
                />
            ))}
        </div>
    );
};

export default MenuList;