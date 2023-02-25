import { createContext, useState, useContext, useEffect as onUpdate } from 'react';

type Theme = 'dark' | 'light';

export type ThemeProviderData = {
  theme: Theme;
  getTheme: () => Theme;
  changeTheme: () => void;
  
  setTheme: {
    dark: () => void;
    light: () => void;
    change: () => void;
  };
};

const AppTheme = createContext({} as ThemeProviderData);

export let isTheme: Theme = 'dark';

const handleTheme = (t: Theme) => isTheme = t;

export function ThemeProvider({ children }: any) {
  const [theme, setAppTheme] = useState<Theme>('dark');
  
  const changeTheme = () => setAppTheme(theme === 'dark' ? 'light' : 'dark');
  const getTheme = () => theme;
  const setAppThemeDark = () => setAppTheme('dark');
  const setAppThemeLight = () => setAppTheme('light');

  const setTheme = {
    dark: setAppThemeDark,
    light: setAppThemeLight,
    change: changeTheme,
  }

  onUpdate(() => {
    handleTheme(theme);
  }, [theme]);

  return (
    <AppTheme.Provider value={{
      theme,
      changeTheme,
      getTheme,
      setTheme
    }}>
      {children}
    </AppTheme.Provider>
  )
}

export const useTheme = () => useContext(AppTheme);
