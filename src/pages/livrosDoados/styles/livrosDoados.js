import { styled } from "styled-components";

export const SectionLivrosDoados = styled.section`
  margin-top: 3vh;
  margin-bottom: 34vh;
`;

export const Titulo = styled.h1`
  color: ${(props) => props.theme.colors.black};
  text-align: center;
  margin-top: 4vh;
  margin-bottom: 2vh;
`;

export const SectionLivros = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 90dvw;
  margin: 0 auto;
`;
