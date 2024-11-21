import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 * {
   margin: 0px;
   padding: 0px;
   box-sizing: 'border-box';
  }

  html {
    overflow:hidden
  }

  body {
    background: ${({ theme }) => theme.background_level_color.deep_01};
    color: ${({ theme }) => theme.primary_text_color.default};
    transition: all 0.50s linear;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    -webkit-font-smoothing: 'antialiased';
    overflow:hidden
  }


  //Scrool do site
  ::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
  }

  /* Estilos para a alça (thumb) da barra de rolagem */
  ::-webkit-scrollbar-thumb {
    /* Cor da alça */
    background-color: ${({ theme }) => theme.background_level_color.deep_03};
    border-radius: 5px; /* Raio da borda da alça */
    height: 10px;
  }

  /* Estilos para a pista (track) da barra de rolagem */
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.background_level_color.deep_00};
  }

  /* Estilos para o canto inferior direito da barra de rolagem */
  ::-webkit-scrollbar-corner {
    background-color: transparent; /* Cor do canto */
  }
`;
