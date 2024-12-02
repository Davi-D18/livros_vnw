import styled from "styled-components";

export const Header = styled.header`
  background: linear-gradient(${(props) => props.theme.others.gradient});
  padding: 1.2rem 0rem;

  ${({ theme }) => theme.media.tablet} {
    padding-block: 0.7rem;
  }
`;

export const containerHeader = styled.div`
  max-width: 97dvw;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    gap: 28px;
  }
`;

export const Slogan = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`;

export const Titulo = styled.h1`
  font-size: 26px;
`;

export const LogoImagem = styled.img`
  width: 43px;
`;

export const SecaoNavegacao = styled.nav``;

export const ListaLinks = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const ItemLista = styled.li``;

export const FormPesquisa = styled.section`
  position: relative;

  ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

export const InputPesquisa = styled.input.attrs({
  type: "search",
  placeholder: "O que você procura?",
  name: "buscaDoUsuario",
})`
  background-color: transparent;
  border: 2px solid white;
  width: 90%;
  border-radius: 10px;
  padding: 8px 0px;
  padding-left: 10px;
  height: 40px;

  &::placeholder {
    color: white;
  }

  &:focus {
    outline: 1px solid white;
  }
`;

export const SearchIconButton = styled.button`
  position: absolute;
  right: 33px;
  top: 53%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const SearchIcon = styled.img`
  width: 18px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(0.94);
  }
`;
