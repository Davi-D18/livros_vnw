import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home/Home.jsx";
import { FormDoacao } from "./pages/FormDoacao/FormDoacao.jsx";
import { LivrosDoados } from "./pages/livrosDoados/LivrosDoados.jsx";
import { Error404 } from "./pages/Error/Error404.jsx";
import { App } from "./App.jsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/themeVariaveis.js";

// Rotas das páginas do site
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <ThemeProvider theme={theme}>
        <Error404 />
      </ThemeProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/doacao",
        element: <FormDoacao />,
      },
      {
        path: "/livrosDoados",
        element: <LivrosDoados />,
      },
    ],
  },
  // {
  //   path: "*", // Qualquer rota não encontrada
  //   element: <Error404 />, // Página de erro
  // },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
