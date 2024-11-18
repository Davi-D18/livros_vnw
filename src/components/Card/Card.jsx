import * as S from "./style/card";
import PropTypes from "prop-types";

export function Card(props) {
  return (
    <S.ArticleCard>
      <S.IconCard src={props.iconeCard} />
      <S.Descricao>{props.descricao}</S.Descricao>
    </S.ArticleCard>
  );
}

// Validação de props com PropTypes
Card.propTypes = {
  iconeCard: PropTypes.node.isRequired,
  descricao: PropTypes.string.isRequired,
};
