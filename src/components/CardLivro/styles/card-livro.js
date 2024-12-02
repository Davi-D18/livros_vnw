import styled from "styled-components";

export const ArticleLivro = styled.article`
  width: 200px;
  max-width: 310px;
  padding-block: 15px;
  padding-inline: 4px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 9px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s ease, box-shadow 0.4s ease-in-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: -1px 1px 1px 0px ${(props) => props.theme.colors.black};
  }
`;

export const Imagem = styled.img`
  width: 48%;
`;

export const ListaInfo = styled.ul`
  margin-top: 3vh;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  li {
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.black};
    text-align: center;
  }
`;

export const Descricao = styled.li`
  color: ${(props) => props.theme.colors.black};
  font-size: 16px;
  text-align: center;
  max-width: 86%;
  margin-block: auto;
`;

export const Paginas = styled.span`
  color: #0334a7;
  font-weight: 600;
`;

export const Categoria = styled.span`
  color: #0334a7;
  font-weight: 600;
`;
