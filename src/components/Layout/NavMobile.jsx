import { navbarItem } from "../../constans/navigations";
import { BiX } from "react-icons/bi"

const NavMobile = ({isOpen, onClose}) => {
    return (
        <div
            className={`fixed inset-0 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md transition-all duration-500 md:hidden z-40 ${
                isOpen 
                    ? "opacity-100 pointer-events-auto" 
                    : "opacity-0 pointer-events-none"
            }`}
        >
            <button 
                onClick={onClose}
                className="absolute top-6 right-8 text-white"
            >
                <BiX size={32} />
            </button>

            <ul className="flex flex-col items-center gap-8 list-none">
                {navbarItem.map((item, index) => (
                    <li
                        key={item.name}
                        className="overflow-hidden"
                        style={{
                            transitionDelay: isOpen ? `${index * 60}ms` : "0ms",
                        }}
                    >
                        <a
                            href={item.href}
                            onClick={onClose}
                            className={`capitalize text-3xl font-light tracking-widest text-neutral-200 hover:text-white transition-all duration-500 ${
                                isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                            }`}
                            style={{
                                display: "block",
                                transform: isOpen ? "translateY(0)" : "translateY(2rem)",
                                opacity: isOpen ? 1 : 0,
                                transition: `transform 0.5s ease ${index * 60}ms, opacity 0.5s ease ${index * 60}ms`,
                            }}
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavMobile;