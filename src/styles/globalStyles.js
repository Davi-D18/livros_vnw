import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
    font-family: ${(props) => props.theme.fonts.fontPrimary};
    text-decoration: none;
  }
`;
