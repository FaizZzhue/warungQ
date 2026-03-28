import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import { infoItems } from "../../constans/info";
import InfoCard from "./InfoCard";

const Info = ({ activateDiscount, discountPercentage }) => {
    return (
        <section 
            id="informasi"
            className="relative overflow-hidden mt-6"
        >
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row items-start gap-6 px-6 md:px-0">
                    {infoItems.map((item) => (
                        <InfoCard
                            key={item.label}
                            data={item}
                            className="flex-1 w-full"
                        />
                    ))}
                </div>

                <div
                    id="promo"
                    className="bg-accent py-6 px-6 md:px-10 mt-6 flex flex-col md:flex-row justify-between md:items-center gap-4 mx-4 md:mx-0"
                >
                    <div className="flex flex-col items-center md:items-start">
                        <Badge variant="third">Promo Special Buat Kamu yang Buntu</Badge>

                        <p className="font-heading font-medium text-accent-dark mt-2 text-center md:text-left text-xl">
                            Diskon 20% untuk paket nasi + minuman
                        </p>

                        <p className="text-sm text-accent-dark font-semibold text-center md:text-left">
                            Berlaku setiap hari 11.00 – 14.00. Tidak berlaku untuk menu habis.
                        </p>

                        {discountPercentage > 0 && (
                            <p className="text-xs text-primary-light mt-2 font-medium">
                                Promo {discountPercentage}% berhasil diklaim
                            </p>
                        )}
                    </div>

                    <div className="flex justify-center md:block md:flex-shrink-0">
                        <Button
                            variant="second"
                            onClick={activateDiscount}
                            disabled={discountPercentage > 0}
                        >
                            {discountPercentage > 0 ? "Promo diklaim" : "Klaim sekarang"}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;