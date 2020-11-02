import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

export default createGlobalStyle`
  ${normalize}
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body,
  html {
    height: 100%;
    margin: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    background-color: #fff;
    line-height: 1.4;
  }
  #root {
    display: grid;
    grid-template-areas: 
      "header header"
      "nav    main  "
      "footer footer";
    grid-template-columns: 1fr 4fr;
  }
  header {
    grid-area: header;
  }
  nav {
    grid-area: nav;
    min-width: 200px;
  }
  main {
    margin: 10px 20px 20px;
    grid-area: main;
  }
  footer {
    grid-area: footer;
  }
  h1 {
    margin-top: 0;
    color: #333;
  }
  label {
    justify-self: right;
  }
  form label,
  form input,
  form div,
  form button {
    margin: 5px;
  }
  a:link,
  a:visited {
    color: #0077cc;
  }
  a:hover,
  a:focus {
    color: #004499;
  }
  code,
  pre {
    max-width: 100%;
  }
  @media (max-width: 600px) {
    #root {
      grid-template-areas: 
      "header"
      "nav   "
      "main  "
      "footer";
      grid-template-columns: 1fr;
    }
  }
`;
