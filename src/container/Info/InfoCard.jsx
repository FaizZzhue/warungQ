const InfoCard = ({data, className}) => {
    const Icon = data.icon

    return (
        <div className={`flex flex-col items-start justify-center ${className}`}>
            <div className="w-full">
                <div className={`w-full pl-4 ${
                    data.variant === "accent" 
                        ? "border border-accent bg-accent-light p-4" 
                        : "border-l-2 border-primary p-4"
                    }`}
                >
                    <Icon size={20} className={data.color} />
                    <p className="font-heading text-sm mt-2">{data.label}</p>
                        <div>
                            <p className="text-xs text-gray-500">{data.date}</p> 
                            <p className="text-xs text-gray-500">{data.time}</p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-500">{data.address}</p>
                            <p className="text-xs text-gray-500">{data.city}</p>
                        </div>

                        <div>
                            <p className={`text-xs ${data.variant === "accent" ? "text-accent-dark" : "text-gray-500"}`}>
                                {data.description}
                            </p>
                            <p className={`text-xs ${data.variant === "accent" ? "text-accent-dark" : "text-gray-500"}`}>
                                {data.price}
                            </p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard;