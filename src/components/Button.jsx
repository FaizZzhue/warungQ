const Button = ({ children, onClick, variant, className, disabled}) => {
    const base = "items-center rounded-sm justify-center font-body transition-colors duration-200 cursor-pointer px-5 py-2"

    const variants = {
        primary: "bg-primary text-primary-light hover:bg-primary-dark",
        second: "bg-accent-dark text-accent-light hover:bg-primary-light hover:text-accent-dark",
        outline: "border border-primary text-primary hover:bg-primary-light",
        danger: "bg-danger text-white hover:bg-danger-dark"
    }

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${base} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    )
}

export default Button;