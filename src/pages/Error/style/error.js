import styled, { keyframes } from "styled-components";

// Definindo as cores e media como variáveis
const errorColor = "#d9534f";

// Animação para os ícones de livro
const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

// Estilos utilizando styled-components

export const ErrorPage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  background-color: #f9f9f9;
  padding: 20px;

  ${({ theme }) => theme.media.tablet} {
    padding: 10px;
    height: 790px;
  }
`;

export const ErrorCode = styled.h1`
  font-size: 5rem;
  color: ${errorColor};
  margin: 0;

  ${({ theme }) => theme.media.tablet} {
    font-size: 4rem;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1rem;
  margin: 10px 0 20px 0;
  color: ${(props) => props.theme.colors.black};
  text-align: center;

  ${({ theme }) => theme.media.tablet} {
    font-size: 0.9rem;
  }
`;

export const BackHome = styled.span`
  a {
    display: inline-block;
    padding: 8px 15px;
    font-size: 0.9rem;
    color: #fff;
    background-color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #014575;
    }
  }
`;

export const BooksWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  ${({ theme }) => theme.media.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 795px;
  }
`;

export const BookIcon = styled.i`
  color: #2121b5;
  position: absolute;
  font-size: 2rem;
  opacity: 0.7;
  animation: ${float} 6s infinite ease-in-out;

  &:nth-child(1) {
    top: 10%;
    left: 15%;
  }
  &:nth-child(2) {
    top: 30%;
    left: 60%;
  }
  &:nth-child(3) {
    top: 30%;
    left: 40%;
  }
  &:nth-child(4) {
    top: 5%;
    left: 80%;
  }
  &:nth-child(5) {
    top: 70%;
    left: 10%;
  }
  &:nth-child(6) {
    top: 44%;
    left: 20%;
  }
  &:nth-child(7) {
    top: 80%;
    left: 50%;
  }
  &:nth-child(8) {
    top: 70%;
    left: 75%;
  }
  &:nth-child(9) {
    top: 17%;
    left: 50%;
  }
  &:nth-child(10) {
    top: 25%;
    left: 10%;
  }
`;

export const InfoSection = styled.section`
  text-align: center;
`;

export const LoaderMessage = styled.p`
  color: ${(props) => props.theme.colors.black};
`;
