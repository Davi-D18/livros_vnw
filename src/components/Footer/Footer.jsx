import * as S from "./styles/footer.js";

import IconFace from "../../assets/icons/icons-social/facebook.png";
import IconTwitter from "../../assets/icons/icons-social/twitter.png";
import IconYoutube from "../../assets/icons/icons-social/youtube.png";
import IconLinkeding from "../../assets/icons/icons-social/linkeding.png";
import IconInstagram from "../../assets/icons/icons-social/instagram.png";

export function Footer() {
  return (
    <S.Rodape>
      <S.SecaoContato>
        <S.NumeroContato>4002-8922</S.NumeroContato>

        <S.ContainerIcons>
          <S.Icon src={IconFace} alt="Ícone do Facebook" />
          <S.Icon src={IconTwitter} alt="Ícone do Twitter" />
          <S.Icon src={IconYoutube} alt="Ícone do Youtube" />
          <S.Icon src={IconLinkeding} alt="Ícone do Linkeding" />
          <S.Icon src={IconInstagram} alt="Ícone do Instagram" />
        </S.ContainerIcons>
      </S.SecaoContato>

      <S.SecaoInfoVnw>
        <S.TextoInformativo>
          Layout desenvolvido pela Vai Na Web para fins educativos - 2024
        </S.TextoInformativo>
      </S.SecaoInfoVnw>
    </S.Rodape>
  );
}
