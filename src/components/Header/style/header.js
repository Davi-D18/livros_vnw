import styled from "styled-components";
import LupaPng from "../../../assets/icons/lupa.png";

export const Header = styled.header`
  background: linear-gradient(${(props) => props.theme.others.gradient});
  padding: 1.2rem 0rem;
`;

export const containerHeader = styled.div`
  max-width: 97dvw;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const AncoraLink = styled.a`
  cursor: pointer;
`;

export const FormPesquisa = styled.form``;

export const InputPesquisa = styled.input.attrs({
  type: "search",
  placeholder: "O que você procura?",
})`
  background-color: transparent;
  border: 2px solid white;
  width: 90%;
  border-radius: 10px;
  padding: 8px 0px;
  padding-left: 10px;
  background-image: url(${LupaPng});
  background-size: 16px;
  background-repeat: no-repeat;
  background-position: right 9px center;
  height: 40px;
  &::placeholder {
    color: white;
  }
`;