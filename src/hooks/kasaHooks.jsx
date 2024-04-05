import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import { AppartmentContext } from '../context/appartmentsContext';

export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return { theme, toggleTheme };
}

export function useAppartment() {
  const { appartment, setAppartment } = useContext(AppartmentContext);
  return { appartment, setAppartment };
}
