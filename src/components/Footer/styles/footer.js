import { styled } from "styled-components";

export const Rodape = styled.footer``;

export const SecaoContato = styled.section`
  display: flex;
  justify-content: space-between;
  padding-inline: 2.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  padding-block: 2rem;
`;

export const NumeroContato = styled.p``;

export const ContainerIcons = styled.section`
  display: flex;
  gap: 10px;
`;

export const Icon = styled.img`
  width: 25px;
  cursor: pointer;
`;

export const SecaoInfoVnw = styled.section`
  background-color: ${(props) => props.theme.colors.darkGray};
  padding-block: 1.4rem;
`;

export const TextoInformativo = styled.p`
  text-align: center;
  font-weight: 700;
`;
