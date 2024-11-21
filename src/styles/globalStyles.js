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

  a {
    color: #ccc;
    position: relative;
    transition: color 0.4s ease;
    font-weight: 500;

    &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background-color: ${(props) => props.theme.colors.white};
    left: 0;
    bottom: -3px; /* Distância do texto */
    transition: width 0.4s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background-color: #fff;
    right: 0;
    bottom: -3px; /* Distância do texto */
    transition: width 0.4s ease-in-out;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
  }
`;
