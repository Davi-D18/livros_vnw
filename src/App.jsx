import { GlobalStyles } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/themeVariaveis";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { ContainerDoar } from "./components/ContainerDoar/ContainerDoar";

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* Repassar para os outros componentes as variáveis
     que contém os estilos que serão reaproveitados */}
        <Header />
        <GlobalStyles />
        <Banner />
        <ContainerDoar />
      </ThemeProvider>
    </>
  );
}
