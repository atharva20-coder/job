import React, { useState, useEffect } from 'react';
import MobileSearchBar from './MobileSearchBar';
import DesktopSearchBar from './DesktopSearchBar';

const checkWindowWidth = (callback) => {
    const width = document.documentElement.clientWidth;
    if (callback)
        return callback(width > 768 ? false : true)
    return width > 768 ? false : true
}

const SearchBar = ({ setRequestOptions }) => {
    const [showMobile, setShowMobile] = useState(() => checkWindowWidth())
    const [filterOptions, setFilterOptions] = useState({
        full_time: false,
        description: '',
        location: ''
    })

    const handleFilterOptions = (ev) => {
        const {name, value, type, checked} = ev.target;
        if (type === 'checkbox')
            setFilterOptions({ ...filterOptions, [name]: checked })
        else 
            setFilterOptions({ ...filterOptions, [name]: value })
    }

    const handleSubmit = () => setRequestOptions(filterOptions)

    useEffect(() => {
        window.addEventListener("resize", () => checkWindowWidth(setShowMobile))
        return () => window.removeEventListener("resize", checkWindowWidth)
    }, [])

    return showMobile ? 
        <MobileSearchBar
            filterOptions={filterOptions} 
            handleFilterOptions={handleFilterOptions} 
            handleSubmit={handleSubmit}
        /> : 
        <DesktopSearchBar 
            filterOptions={filterOptions} 
            handleFilterOptions={handleFilterOptions} 
            handleSubmit={handleSubmit}
        />
}

export default SearchBar;