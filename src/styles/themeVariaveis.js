export const breakpoints = {
  tablet: "768px",
  mobile: "480px",
};

export const theme = {
  colors: {
    primary: "#005695", // Azul forte
    primaryTransparent: "#0157944D", // Azul transparente
    black: "#000000", // Preto puro
    darkGray: "#232020", // Cinza escuro
    white: "#FFF", // Branco
  },

  fonts: {
    fontPrimary: "'Inter', serif",
    fontSecondary: "'Roboto', sans-serif;",
  },

  others: {
    gradient: "90deg, #001B2F, #005695",
  },

  media: {
    tablet: `@media (max-width: ${breakpoints.tablet})`,
    mobile: `@media (max-width: ${breakpoints.mobile})`,
  },
};
