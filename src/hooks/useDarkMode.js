import { useEffect } from 'react'

import useLocalStorage from './useLocalStorage';

const useDarkMode = ({ initialValue = true }) => {
  const [isDark, setIsDark] = useLocalStorage({ key: 'darkMode', initialValue: initialValue });

  useEffect(() => {
    isDark
      ? document.querySelector('body').classList.add('dark-mode')
      : document.querySelector('body').classList.remove('dark-mode');
  },        [isDark]);

  return [isDark, setIsDark];
};

export default useDarkMode;
