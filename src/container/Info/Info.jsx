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
            </div>
        </section>
    )
}

export default Info;