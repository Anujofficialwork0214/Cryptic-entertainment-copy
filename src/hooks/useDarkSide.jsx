import { useEffect, useState } from 'react';

export default function useDarkSide() {
    const [theme, setTheme] = useState(localStorage.theme || 'dark');
    const colorTheme = (theme === 'dark') ? 'light' : 'dark';
    console.log(localStorage.theme, '1')
    console.log(colorTheme, '2')
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        // Save theme to Local Storage
        localStorage.setItem('theme', theme);
    }, [theme, colorTheme]);
    return [colorTheme, setTheme];
}