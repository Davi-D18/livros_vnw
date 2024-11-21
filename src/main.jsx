import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Doacao } from "./pages/doacao/Doacao.jsx";
import { LivrosDoados } from "./pages/livrosDoados/LivrosDoados.jsx";
import { Home } from "./pages/home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/doacao",
        element: <Doacao />,
      },
      {
        path: "/livrosDoados",
        element: <LivrosDoados />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
