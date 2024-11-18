import { styled } from "styled-components";
import imagemFundo from "../../../assets/images/secao1_entregando-livros.png";

export const SectionContainer = styled.section`
  background-image: url(${imagemFundo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 89vh;

  display: flex;
  align-items: center;
  position: relative;
`;

export const Tittle = styled.h2`
  position: absolute;
  text-transform: uppercase;
  font-size: 2.4rem;
  font-weight: 700;
  font-family: ${(props) => props.theme.fonts.fontSecondary};
  max-width: 320px;
  left: 2%;
  top: 34%;
`;

