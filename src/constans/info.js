import { BiTime, BiMapAlt, BiPurchaseTag } from "react-icons/bi"

export const infoItems = [
    {
        icon: BiTime,
        color: "text-gray-500",
        label: "Jam operasional",
        date: "Senin – Minggu",
        time: "08.00 – 21.00 WIB"
    },
    {
        icon: BiMapAlt,
        color: "text-danger",
        label: "Lokasi",
        address: "Jl. Merdeka No. 12",
        city: "Palembang, Sumsel"
    },
    {
        icon: BiPurchaseTag,
        color: "text-accent",
        variant: "accent",
        label: "Promo hari ini",
        description: "Gratis es teh untuk",
        price: "pembelian min. Rp 25.000"
    },
]