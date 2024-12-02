import { styled } from "styled-components";

export const Container = styled.section`
  width: 100%;
`;

export const SectionLivrosDoados = styled.section`
  margin-bottom: 7vh;
`;

export const Titulo = styled.h1`
  color: ${(props) => props.theme.colors.black};
  text-align: center;
  margin-top: 4vh;
  margin-bottom: 2vh;

  ${(props) => props.theme.media.mobile} {
    font-size: 30px;
  }
`;

export const SectionLivros = styled.section`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
  max-width: 90dvw;
  margin: 0 auto;

  ${(props) => props.theme.media.mobile} {
    margin-top: 5vh;
  }
`;

export const ContainerLoader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 100vh;

  p {
    color: ${(props) => props.theme.colors.black};
  }

  ${(props) => props.theme.media.mobile} {
    height: 80vh;
  }
`;
