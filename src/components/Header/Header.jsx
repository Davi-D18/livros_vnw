import * as S from "./style/header.js";
import Logo from "../../assets/icons/icon.png";
import IconPesquisa from "../../assets/icons/lupa.png";

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
              <S.AncoraLink>Inicio</S.AncoraLink>
            </S.ItemLista>

            <S.ItemLista>
              <S.AncoraLink>Livros Doados</S.AncoraLink>
            </S.ItemLista>

            <S.ItemLista>
              <S.AncoraLink>Quero Doar</S.AncoraLink>
            </S.ItemLista>
          </S.ListaLinks>
        </S.SecaoNavegacao>

        <S.FormPesquisa>
          <S.InputPesquisa placeholder="O que você procura?" />
        </S.FormPesquisa>
      </S.containerHeader>
    </S.Header>
  );
}
