import styled from "styled-components";

export const SecaoFormDoarLivro = styled.section`
  height: 80dvh;

  ${({ theme }) => theme.media.tablet} {
    margin-bottom: 2.5rem;
  }
`;

export const Aviso = styled.p`
  text-align: center;
  margin-top: 3vh;
  color: ${(props) => props.theme.colors.black};

  ${({ theme }) => theme.media.tablet} {
    font-size: 20px;
    max-width: 87%;
    margin-inline: auto;
  }
`;

export const SecaoFormulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  align-items: center;
  padding-top: 3.5rem;
  padding-bottom: 1rem;
  max-width: 400px;
  margin: 2vh auto;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 8px;

  ${({ theme }) => theme.media.tablet} {
    width: 90%;
    margin-top: 4vh;
  }
`;

export const ContainerIconAndText = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 7vh;

  ${({ theme }) => theme.media.tablet} {
    gap: 10px;
  }
`;

export const IconImagemLivro = styled.img`
  width: 55px;
`;

export const InfoLivro = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-size: 25px;
  font-weight: 400;
`;

export const Input = styled.input`
  border: 2px solid ${(props) => props.theme.colors.primary};
  padding: 7px;
  width: 70%;
  border-radius: 8px;
  background-color: transparent;
  padding-left: 8px;
  color: ${(props) => props.theme.colors.black};

  &::placeholder {
    color: ${(props) => props.theme.colors.black};
  }

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors.primary};
  }

  ${({ theme }) => theme.media.tablet} {
    width: 78%;
  }
`;

export const ButtonSubmitDoar = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  height: 48px;
  width: 140px;
  font-size: 17px;
  border-radius: 9px;
  cursor: pointer;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.03);
  }
`;
