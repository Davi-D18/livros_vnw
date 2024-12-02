import PropTypes from "prop-types";
import * as S from "./styles/card-livro.js";

export function CardLivro({ imagem, descricao, categoria, paginas }) {
  return (
    <S.ArticleLivro>
      <S.Imagem src={imagem} alt="Imagem do Livro" loading="lazy" />
      <S.ListaInfo>
        <S.Descricao>{descricao}</S.Descricao>
        <li>
          Páginas: <S.Paginas>{paginas}</S.Paginas>
        </li>
        <li>
          Categoria: <S.Categoria>{categoria}</S.Categoria>
        </li>
      </S.ListaInfo>
    </S.ArticleLivro>
  );
}

CardLivro.propTypes = {
  imagem: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
  paginas: PropTypes.number.isRequired,
};
