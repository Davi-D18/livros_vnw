import * as S from "./styles/livrosDoados.js";
import { Livros } from "../../data/info-livros.js";
import { CardLivro } from "../../components/CardLivro/CardLivro.jsx";

export function LivrosDoados() {
  return (
    <S.SectionLivrosDoados>
      <S.Titulo>Livros Doados</S.Titulo>

      <S.SectionLivros>
        {Livros.map((livro, index) => (
          <CardLivro
            key={index}
            imagem={livro.imagem}
            descricao={livro.titulo}
          />
        ))}
      </S.SectionLivros>
    </S.SectionLivrosDoados>
  );
}
