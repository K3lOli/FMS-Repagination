import { useState } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Lógica adicional para alternar o tema de modo escuro
  };

  return { isDarkMode, handleToggleDarkMode };
};