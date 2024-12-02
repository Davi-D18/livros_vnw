import { Link } from "react-router-dom";
import * as S from "./style/header.js";
import Logo from "../../assets/icons/icon.png";
import LupaPng from "../../assets/icons/lupa.png";

export function Header() {
  return (
    <S.Header>
      <S.containerHeader>
        <S.Slogan>
          <S.LogoImagem src={Logo} alt="Logo" />
          <S.Titulo>Livros Vai Na Web</S.Titulo>
        </S.Slogan>

        <S.SecaoNavegacao>
          <S.ListaLinks>
            <S.ItemLista>
              <Link to="/">Inicio</Link>
            </S.ItemLista>

            <S.ItemLista>
              <Link to="/livrosDoados">Livros Doados</Link>
            </S.ItemLista>

            <S.ItemLista>
              <Link to="/doacao">Quero Doar</Link>
            </S.ItemLista>
          </S.ListaLinks>
        </S.SecaoNavegacao>

        <S.FormPesquisa>
          <S.InputPesquisa />
          <S.SearchIconButton>
            <S.SearchIcon src={LupaPng} alt="Lupa" />
          </S.SearchIconButton>
        </S.FormPesquisa>
      </S.containerHeader>
    </S.Header>
  );
}
