import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/themeVariaveis";
import { GlobalStyles } from "./styles/globalStyles";
import { Footer } from "./components/Footer/Footer";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Outlet />{" "}
      {/* Reaproveita esses componentes do Header e footer para exibir em outras páginas */}
      <Footer />
    </ThemeProvider>
  );
}
