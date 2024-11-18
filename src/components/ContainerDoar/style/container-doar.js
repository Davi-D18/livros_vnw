import styled from "styled-components";

export const Container_Doar = styled.section`
  max-width: 86dvw;
  margin: 0 auto;
`;

export const TextPorqueDoar = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  margin-top: 3rem;
  margin-bottom: 1.5rem;
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
