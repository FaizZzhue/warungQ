import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";

const FeaturedMenu = ({ data }) => {
    const featuredItems = data
        .filter((item) => item.featured)
        .slice(0, 4);

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            {featuredItems.map((item) => (
                <Card
                    key={item.id}
                    variant="default"
                    className="relative p-4 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                >
                    <div className="flex flex-col gap-1 mb-3">
                        <div className="text-3xl mb-2">{item.emoji}</div>
                        <h2 className="font-semibold">{item.name}</h2>
                        <p className="text-sm text-gray-500 line-clamp-2">
                            {item.description}
                        </p>

                        {item.badge && (
                            <div className="mb-2">
                                <Badge variant="primary">{item.badge}</Badge>
                            </div>
                        )}

                        {/* <p className="text-primary font-semibold">
                            Rp {item.price.toLocaleString()}
                        </p> */}
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default FeaturedMenu;