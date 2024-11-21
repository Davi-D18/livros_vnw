import * as S from "./styles/card-livro.js";
import PropTypes from "prop-types";

export function CardLivro(props) {
  return (
    <S.ArticleLivro>
      <S.Imagem src={props.imagem} alt="Imagem do Livro" />
      <S.Descricao>{props.descricao}</S.Descricao>
    </S.ArticleLivro>
  );
}

CardLivro.propTypes = {
  imagem: PropTypes.node.isRequired,
  descricao: PropTypes.string.isRequired,
};
