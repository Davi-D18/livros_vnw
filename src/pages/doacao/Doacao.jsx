import * as S from "./styles/doacao.js";

import Icon from "../../assets/icons/livro-icon.png";

export function Doacao() {
  return (
    <S.SecaoFormDoarLivro>
      <S.Aviso>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </S.Aviso>

      <S.SecaoFormulario>
        <S.ContainerIconAndText>
          <S.IconImagemLivro src={Icon} />
          <S.InfoLivro>Informações do Livro</S.InfoLivro>
        </S.ContainerIconAndText>
        <S.Input type="text" name="titulo-livro" placeholder="Titulo" />
        <S.Input type="text" name="categoria-livro" placeholder="Categoria" />
        <S.Input type="text" name="autor-livro" placeholder="Autor" />
        <S.Input type="text" name="imagem-livro" placeholder="Link da imagem" />

        <S.ButtonSubmitDoar>Doar</S.ButtonSubmitDoar>
      </S.SecaoFormulario>
    </S.SecaoFormDoarLivro>
  );
}
