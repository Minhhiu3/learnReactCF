import React, { Children, useEffect, useState } from 'react'
import ToggleTheme from '../components/ToggleTheme';

const ThemeContext = () => {
    const [theme, setTheme] = useState("light")
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    useEffect(() => {

        document.body.setAttribute("theme", theme)
    }, [theme])
    return (
        <ThemeContext.provider value={{ theme, ToggleTheme }}>{Children}</ThemeContext.provider>
    )
}

export default ThemeContext