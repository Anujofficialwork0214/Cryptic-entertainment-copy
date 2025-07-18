// import { useEffect, useState } from 'react';

// export default function useDarkSide() {
//     const [theme, setTheme] = useState(localStorage.theme || 'dark');
//     const colorTheme = (theme === 'dark') ? 'light' : 'dark';
//     console.log(localStorage.theme, '1')
//     console.log(colorTheme, '2')
//     useEffect(() => {
//         const root = window.document.documentElement;
//         root.classList.remove(colorTheme);
//         root.classList.add(theme);
//         // Save theme to Local Storage
//         localStorage.setItem('theme', theme);
//     }, [theme, colorTheme]);
//     return [colorTheme, setTheme];
// }

import { useEffect, useState } from 'react';

export default function useDarkSide() {
  const getInitialTheme = () => {
    if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    return 'light'; // default fallback
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove previous theme class
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  // This returns current theme and a setter, no confusing inverse
  return [theme, setTheme];
}
