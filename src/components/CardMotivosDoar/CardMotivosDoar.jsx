import * as S from "./style/card";
import PropTypes from "prop-types";

export function CardMotivosDoar(props) {
  return (
    <S.ArticleCard>
      <S.IconCard src={props.iconeCard} />
      <S.Descricao>{props.descricao}</S.Descricao>
    </S.ArticleCard>
  );
}

// Validação de props com PropTypes
CardMotivosDoar.propTypes = {
  iconeCard: PropTypes.node.isRequired,
  descricao: PropTypes.string.isRequired,
};
