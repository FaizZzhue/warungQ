const Card = ({ children, variant, className }) => {
    const base = "flex flex-col p-4 rounded-none"

    const variants = {
        default: "bg-white border border-primary/20",
        accent: "border border-accent bg-accent-light",
        primary: "bg-primary-light",
    }

    return (
        <div className={`${base} ${variants[variant]} ${className}`}>
            {children}
        </div>
    )
}

export default Card;