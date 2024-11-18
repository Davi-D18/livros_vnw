import styled from "styled-components";

export const ArticleCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  background-color: ${(props) => props.theme.colors.primaryTransparent};
  border-radius: 9px;
  width: 260px;
  max-width: 280px;
  height: 240px;
  transition: opacity 0.5s ease-in-out;
  animation: aparecerCard 0.6s ease;

  @keyframes aparecerCard {
    from {
      transform: translateX(-100%);
    }

    to {
      transform: translateX(0%);
    }
  }
`;

export const IconCard = styled.img`
  max-width: 35%;
  margin-block: 9px;
`;

export const Descricao = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: 17px;
  text-align: center;
  margin-top: 20px;
  max-width: 96%;
`;
