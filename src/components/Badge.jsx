const Badge = ({ children, variant, className}) => {
    const base = "inline-flex items-center justify-center rounded-full font-body px-5 py-2"

    const variants = {
        primary: "bg-primary/80 text-white",
        second: "bg-primary-light text-black",
        third: "bg-accent-light text-primary-light",
        danger: "bg-danger text-white"
    }

    return (
        <span
            className={`${base} ${variants[variant]} ${className}`}
        >
            {children}
        </span>
    )
}

export default Badge;