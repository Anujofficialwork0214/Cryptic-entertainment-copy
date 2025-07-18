import React, { useState, useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from '../../hooks/ThemeContext'; // ⬅️ use your context hook

export default function Switcher() {
    const { theme, toggleTheme } = useTheme(); // ⬅️ get from context
    const [darkSide, setDarkSide] = useState(theme === "dark");

    useEffect(() => {
        setDarkSide(theme === "dark");
    }, [theme]);

    const toggleDarkMode = (checked) => {
        toggleTheme(); // from context
    };

    return (
        <DarkModeSwitch
            checked={darkSide}
            onChange={toggleDarkMode}
            className="md:w-8 md:h-8 w-6 h-6 icon-dl"
        />
    );
}
