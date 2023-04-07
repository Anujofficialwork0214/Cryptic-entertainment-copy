import React, { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkSide from '../../hooks/useDarkSide';

export default function Switcher() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false);

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme)
        setDarkSide(checked);
    }

    return (
        <DarkModeSwitch
            checked={darkSide}
            onChange={toggleDarkMode}
            className="md:w-8 md:h-8 w-6 h-6 icon-dl"
        />
    )
}