import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;

    text: string;
    background: string;

    contentWidth: number;
  }
}