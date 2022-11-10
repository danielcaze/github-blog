import { defaultTheme } from "../styles/themes/default";

type defaultThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends defaultThemeType { }
}