import { styled } from "styled-components";
import imagemFundoDesktop from "../../../assets/images/secao1_entregando-livros.png";
import imagemFundoMobile from "../../../assets/images/secao1_entregando-livros-mobile.png";

export const SectionContainer = styled.section`
  background-image: url(${imagemFundoDesktop});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 89vh;

  display: flex;
  align-items: center;

  ${({ theme }) => theme.media.tablet} {
    background-image: url(${imagemFundoMobile});
    justify-content: center;
    height: 750px;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  margin-left: 3%;
  font-size: 2rem;
  font-weight: 700;
  font-family: ${(props) => props.theme.fonts.fontSecondary};
  max-width: 24%;
  position: absolute;

  ${({ theme }) => theme.media.tablet} {
    max-width: 70%;
    text-align: center;
    margin-left: 0;
  }
`;

export const ContainerDoar = styled.section`
  max-width: 79dvw;
  margin: 0 auto;
  margin-bottom: 18vh;

  ${({ theme }) => theme.media.tablet} {
    margin-bottom: 12vh;
  }
`;

export const TextPorqueDoar = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  margin-top: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 500;

  ${({ theme }) => theme.media.tablet} {
    text-align: center;
    font-size: 1.9em;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  ${({ theme }) => theme.media.tablet} {
    justify-content: center;
  }
`;
