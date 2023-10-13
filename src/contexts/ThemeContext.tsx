import  { useContext, createContext, useState, useEffect } from 'react';

export type IPreference = {
  darkmode: boolean;
};

const ThemeContext = createContext<IPreference | any>(undefined);

export const ThemeProvider = ({ children }:any) => {
  const [darkMode, setDarkmode] = useState<boolean>(
    JSON.parse(localStorage.getItem('darkmode') + '') || false,
  );

  useEffect(() => {
    localStorage.setItem('darkmode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkmode(!darkMode);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        setDarkmode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
