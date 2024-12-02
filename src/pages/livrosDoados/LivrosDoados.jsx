import { useState, useEffect } from "react";
import { Hourglass } from "react-loader-spinner";
import { Livros } from "../../data/info-livros.js";
import { CardLivro } from "../../components/CardLivro/CardLivro.jsx";
import * as S from "./styles/livrosDoados.js";

export const LivrosDoados = () => {
  const [renderizarConteudo, setRenderizarConteudo] = useState(false);

  // Simula o carregamento da página
  useEffect(() => {
    setTimeout(() => {
      setRenderizarConteudo(true);
    }, 1500);
  }, []);

  return (
    <S.Container>
      {renderizarConteudo ? (
        <S.SectionLivrosDoados>
          <S.Titulo>Livros Doados</S.Titulo>
          <S.SectionLivros>
            {Livros.map((livro, index) => (
              <CardLivro
                key={index}
                imagem={livro.imagem}
                descricao={livro.titulo}
                categoria={livro.categoria}
                paginas={parseInt(livro.paginas)}
              />
            ))}
          </S.SectionLivros>
        </S.SectionLivrosDoados>
      ) : (
        <S.ContainerLoader>
          <Hourglass />
          <p>Buscando Livros...</p>
        </S.ContainerLoader>
      )}
    </S.Container>
  );
};
