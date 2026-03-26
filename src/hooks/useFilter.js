import { useState } from 'react'

const useFilter = () => {
    const [activeCategory, setActiveCategory] = useState('Semua')

    const filterByCategory = (menuItems) => {
        if (activeCategory === 'Semua') {
            return menuItems 
        }
        return menuItems.filter(item => item.category === activeCategory)
    }

    return { activeCategory, setActiveCategory, filterByCategory }
}

export default useFilter;