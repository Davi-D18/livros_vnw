# Livros-VNW

## Descrição do Projeto
O **Livros-VNW** é um site que incentiva as pessoas a doarem livros, promovendo a disseminação do hábito de leitura e o reaproveitamento de materiais. O projeto conta com:

- Uma **página inicial** com uma mensagem motivadora e cartões com benefícios de doar livros.
- Uma página para **cadastrar livros** que serão doados, com um formulário intuitivo.
- Uma página que exibe os **livros já doados**, usando um array estático que será futuramente integrado a uma API.

O projeto é voltado para fins educativos e foi desenvolvido como um desafio baseado em um layout fornecido no Figma.

---

## Estrutura do Projeto

A estrutura do projeto está organizada de forma modular, utilizando componentes e estilos centralizados. Segue o esboço das principais pastas:

```plaintext
src/
├── assets/               # Imagens e outros arquivos estáticos
├── components/           # Componentes reutilizáveis
│   ├── Banner/
│   ├── Card/
│   ├── CardLivro/
│   ├── ContainerDoar/
│   ├── Footer/
│   └── Header/
├── data/                 # Dados estáticos (ex.: livros.js)
├── pages/                # Páginas principais do site
│   ├── doacao/           # Página de cadastro de livros
│   ├── home/             # Página inicial
│   └── livrosDoados/     # Página que exibe os livros doados
├── styles/               # Estilos globais e tema
├── App.jsx               # Arquivo principal do React
└── main.jsx              # Entrada principal do aplicativo
```
# Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface.
- **Styled Components**: Biblioteca para estilização de componentes com CSS-in-JS.
- **React Router DOM**: Gerenciamento de rotas no aplicativo.
- **Prop-Types**: Para validação de tipos de props.
- **Vite**: Ferramenta de build para desenvolvimento rápido.

---

## O que é Styled Components?
O Styled Components é uma biblioteca que permite escrever CSS diretamente dentro de arquivos JavaScript. Ele cria componentes estilizados usando o conceito de CSS-in-JS, onde cada estilo é escopado automaticamente, evitando problemas como conflitos de classe.

### Exemplos de Uso de Styled Components:
Aqui estão dois exemplos simples que mostram como o Styled Components é usado no projeto.

Criando Componentes Estilizados
Título Personalizado

```jsx
import styled from 'styled-components';

export const Titulo = styled.h1`
  font-size: 26px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.fontPrimary};
`;
```

### Como funciona:

Criamos uma constante chamada Titulo usando a função styled.h1.
O styled estiliza a tag HTML (h1) com as regras CSS fornecidas.
As variáveis de tema (theme.colors.primary e theme.fonts.fontPrimary) tornam o estilo reutilizável.
Logo Personalizado

```jsx
import styled from 'styled-components';

export const LogoImagem = styled.img`
  width: 43px;
  border-radius: 50%;
`;
```
### Como funciona:

Aqui, a tag img é estilizada diretamente.
O componente pode ser usado em qualquer lugar como um React Component:
```jsx
<LogoImagem src="logo.png" />.
```
