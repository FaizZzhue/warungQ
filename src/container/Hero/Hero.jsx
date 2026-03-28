import { heroItems } from "../../constans/hero";
import HeroText from "./HeroText";

const Hero = () => {
    return (
        <section 
            id="tentang"
            className="relative overflow-hidden pt-20 px-4 md:px-6"
        >
            <div className="mx-auto max-w-6xl flex flex-row justify-between items-center bg-primary-light">
                <div className="md:w-1/2 px-5 md:px-10 py-10">
                    <HeroText data={heroItems} />
                </div>

                <div className="hidden md:flex w-1/2 items-center justify-center text-[180px]">
                    {heroItems.images}
                </div>
            </div>
        </section>
    )
}

export default Hero;