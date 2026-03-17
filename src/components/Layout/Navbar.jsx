import { BiShoppingBag, BiX, BiMenu } from "react-icons/bi";
import { navbarItem } from "../../constans/navigations";
import NavMobile from "./NavMobile"; 
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => setIsOpen(!isOpen)
    const handleNavClick = () => setIsOpen(false)

    return (
        <div className="fixed top-0 w-full bg-white px-6 py-4 z-50">
            <div className="mx-auto max-w-6xl flex justify-between items-center">
                <div>
                    <a className="font-heading">
                        WarungQ
                    </a>
                </div>

                <nav>
                    <ul className="hidden md:flex items-center flex-row list-none gap-2">
                        {navbarItem.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    onClick={handleNavClick}
                                    className="uppercase text-sm font-heading tracking-widest text-black hover:text-primary transition-colors duration-300 relative group"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-4">
                    <button>
                        <BiShoppingBag className="text-black hover:text-primary" />
                    </button>

                    <button className="md:hidden" onClick={handleToggle}>
                        <BiMenu />
                    </button>
                </div>
            </div>
            <NavMobile isOpen={isOpen} onClose={handleNavClick} />
        </div>
    )
}

export default Navbar;