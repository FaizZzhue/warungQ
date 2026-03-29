const Badge = ({ children, variant, className}) => {
    const base = "inline-flex items-center justify-center rounded-xl font-body px-4"

    const variants = {
        primary: "bg-primary/80 text-white",
        second: "bg-primary-light text-black",
        third: "bg-accent-light text-accent-dark",
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