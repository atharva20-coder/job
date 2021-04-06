import { useState, useEffect } from 'react'

const checkUserPreference = () => {
    const localStorageTheme = window.localStorage.getItem('theme')
    if (localStorageTheme) return localStorageTheme

    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return userPrefersDark ? 'dark' : 'light'
}

const useTheme = () => {
    const [theme, setTheme] = useState(() => checkUserPreference())
    const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    useEffect(() => {
        window.localStorage.setItem('theme', theme)
    }, [theme])

    return {
        theme,
        changeTheme
    }
}

export { useTheme }