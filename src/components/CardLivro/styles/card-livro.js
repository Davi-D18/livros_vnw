import styled from "styled-components";

export const ArticleLivro = styled.article`
  width: 200px;
  max-width: 310px;
  padding-block: 15px;
  padding-inline: 4px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 9px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Imagem = styled.img`
  width: 48%;
`;

export const Descricao = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: 14px;
  text-align: center;
  max-width: 80%;
  margin-block: auto;
  margin-top: 5vh;
`;
