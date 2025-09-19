// src/types/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    text: string;
  }
}
// src/theme/light.ts
export const lightTheme = {
  background: '#ffffff',
  text: '#000000',
};

// src/theme/dark.ts
export const darkTheme = {
  background: '#000000',
  text: '#ffffff',
};
