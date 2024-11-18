import { Card } from "../Card/Card";
import * as S from "./style/container-doar";

// Imagens
import Icon1 from "../../assets/icons/grupo-pessoas.png";
import Icon2 from "../../assets/icons/pessoa-lendo.png";
import Icon3 from "../../assets/icons/mao-fechada.png";
import Icon4 from "../../assets/icons/balanca.png";

export function ContainerDoar() {
  const data = [
    {
      id: 1,
      iconeCard: Icon1,
      descricao:
        "Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.",
    },
    {
      id: 2,
      iconeCard: Icon2,
      descricao: "Estimula o hábito da leitura e o aprendizado contínuo.",
    },
    {
      id: 3,
      iconeCard: Icon3,
      descricao:
        "Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.",
    },
    {
      id: 4,
      iconeCard: Icon4,
      descricao:
        "Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.",
    },
  ];

  return (
    <S.Container_Doar>
      <S.TextPorqueDoar>Por que devo doar?</S.TextPorqueDoar>

      <S.ContainerCards>
        {data.map((card) => (
          <Card
            key={card.id}
            iconeCard={card.iconeCard}
            descricao={card.descricao}
          />
        ))}
      </S.ContainerCards>
    </S.Container_Doar>
  );
}
