import { categories } from "../constans/menu";
import Button from "./Button";

const CategoryFilter = ({ activeCategory, setCategory }) => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-8 gap-3 md:gap-6 mb-8">
            {categories.map((cat, index) => (
                <Button
                    key={index}
                    onClick={() => setCategory(cat)}
                    variant={activeCategory === cat ? "primary" : "outline"}
                    className="rounded-lg whitespace-nowrap px-4 py-2"
                >
                    {cat}
                </Button>
            ))}
        </div>
    );
};

export default CategoryFilter;