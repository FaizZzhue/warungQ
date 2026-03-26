import { useState } from 'react'

const useFavorite = () => {
    const [favorites, setFavorites] = useState([])

    const toggleFavorite = (item) => {
        setFavorites((prevFavorites) => {
            const exists = prevFavorites.find(fav => fav.id === item.id)
            if (exists) {
                return prevFavorites.filter(fav => fav.id !== item.id)
            } else {
                return [...prevFavorites, item]
            }
        })
    }

    const isFavorite = (itemId) => {
        return favorites.some(fav => fav.id === itemId)
    }

    return { favorites, toggleFavorite, isFavorite }
}

export default useFavorite;