import Badge from "../../components/Badge";
import Button from "../../components/Button";
import { infoItems } from "../../constans/info"
import InfoContent from "./InfoContent"

const Info = () => {
    return (
        <section className="relative overflow-hidden mt-6">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row items-start gap-6 px-6 md:px-0">
                    {infoItems.map((item) => (
                            <InfoContent 
                            key={item.label} 
                            data={item}
                            className="flex-1 w-full"
                        />
                    ))}
                </div>

                <div className="bg-accent py-6 px-6 md:px-10 mt-6 flex flex-col md:flex-row justify-between md:items-center gap-4 mx-4 md:mx-0">
                    <div className="flex flex-col items-center md:items-start">
                        <Badge variant="third">Promo Special</Badge>

                        <p className="font-heading font-medium text-accent-dark mt-2 text-center md:text-left text-xl">
                            Diskon 20% untuk paket nasi + minuman
                        </p>

                        <p className="text-sm text-accent-dark font-semibold text-center md:text-left">
                            Berlaku setiap hari 11.00 – 14.00. Tidak berlaku untuk menu habis.
                        </p>
                    </div>

                    <div className="flex justify-center md:block md:flex-shrink-0">
                        <Button variant="second">Klaim sekarang</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info;