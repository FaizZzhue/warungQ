import Badge from "../../components/Badge";
import Button from "../../components/Button";

const HeroContent = ({data}) => {
    return (
        <div className="flex flex-col items-center md:items-start justify-center">
            <Badge variant="primary">
                {data.label}
            </Badge>

            <div className="text-4xl font-heading text-center md:text-left mt-4">
                {data.greetingTop}<br/>{data.greetingBottom} 
            </div>

            <div className="text-sm font-body text-center md:text-left mt-4"> 
                {data.description}
            </div>

            <div className="flex gap-4 mt-6">
                <Button variant="primary">Lihat Menu</Button>
                <Button variant="outline">Tentang Kami</Button>
            </div>

            <div className="md:hidden text-[120px] text-center md:text-right mt-4">
                {data.images}
            </div>
        </div>
    )
}

export default HeroContent;