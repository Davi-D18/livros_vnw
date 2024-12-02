import * as S from "./style/error.js";
import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { Hourglass } from "react-loader-spinner";

export const Error404 = () => {
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

  useEffect(() => {
    // Simula o carregamento da página
    setTimeout(() => {
      setLoading(false); // Após 2 segundos, esconde o loader e mostra o conteúdo
    }, 2500);
  }, []);

  return (
    <S.ErrorPage>
      {loading ? (
        <>
          <Hourglass />
          <S.LoaderMessage>Carregando...</S.LoaderMessage>
        </>
      ) : (
        <>
          {/* Cria um array com 10 elementos vazios e o mapeia para criar 10 ícones de livros que vão ser espalhados pela página */}
          <S.BooksWrapper>
            {[...Array(10)].map((_, index) => (
              <S.BookIcon key={index} className={`fas fa-book`} />
            ))}
          </S.BooksWrapper>

          <S.InfoSection>
            <S.ErrorCode>404</S.ErrorCode>
            <S.ErrorMessage>
              Ops! Parece que esta página está perdida em meio aos livros.
            </S.ErrorMessage>
            <S.BackHome>
              <Link to="/">Voltar para a página inicial</Link>
            </S.BackHome>
          </S.InfoSection>
        </>
      )}
    </S.ErrorPage>
  );
};
