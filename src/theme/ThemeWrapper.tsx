// src/theme/ThemeWrapper.tsx
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { lightTheme } from './light';
import { darkTheme } from './dark';

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div style={{ background: isDarkMode ? '#000' : '#fff', color: isDarkMode ? '#fff' : '#000' }}>
        <button onClick={() => setIsDarkMode(prev => !prev)}>
          Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
        {children}
      </div>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
