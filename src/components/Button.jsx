const Button = ({ 
    children, 
    onClick, 
    variant = "primary", 
    className = "", 
    disabled = false,
    shape = "default"
}) => {

    const base = "flex items-center justify-center font-body transition-all duration-200";

    const variants = {
        primary: "bg-primary text-primary-light hover:bg-primary-dark",
        second: "bg-accent-dark text-accent-light hover:bg-primary-light hover:text-accent-dark",
        outline: "border border-primary text-primary hover:bg-primary-light",
        danger: "bg-danger text-white hover:bg-danger-dark"
    };

    const shapes = {
        default: "px-5 py-2 rounded-sm",
        rounded: "px-5 py-2 rounded-lg",
        circle: "w-9 h-9 rounded-full p-0"
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                ${base} 
                ${variants[variant] || variants.primary} 
                ${shapes[shape] || shapes.default} 
                ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} 
                ${className}
            `}
        >
            {children}
        </button>
    );
};

export default Button;