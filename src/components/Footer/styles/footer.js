import { styled } from "styled-components";

export const Rodape = styled.footer``;

export const SecaoContato = styled.section`
  display: flex;
  justify-content: space-between;
  padding-inline: 2.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  padding-block: 2rem;

  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    gap: 1.4rem;
    padding-inline: 1.8rem;
    padding-block: 0.9rem;
    align-items: center;

    p {
      font-size: 20px;
    }
  }
`;

export const NumeroContato = styled.p``;

export const ContainerIcons = styled.section`
  display: flex;
  gap: 10px;

  ${({ theme }) => theme.media.mobile} {
    gap: 20px;

    img {
      width: 30px;
    }
  }
`;

export const Icon = styled.img`
  width: 25px;
  cursor: pointer;
`;

export const SecaoInfoVnw = styled.section`
  background-color: ${(props) => props.theme.colors.darkGray};
  padding-block: 1.4rem;

  ${({ theme }) => theme.media.mobile} {
    padding-block: 1rem;

    .textoInformativo {
      font-size: 15px;
    }
  }
`;

export const TextoInformativo = styled.p`
  text-align: center;
  font-weight: 700;
`;
