import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */

 @font-face {
    font-family: 'FiraCode';
    font-style: normal;
    font-weight: 300 700;
    src: url(https://fonts.gstatic.com/l/font?kit=uU9NCBsR6Z2vfE9aq3bR396EilOkbTs60rROVzO-VaGJw1doRfQguUrTlaF_NV4&skey=33bc0af28fd31bc7&v=v8) format('woff2');
  }

  html{
    scroll-behavior: smooth;
  }
  
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background: var(--background);
    color: var(--texts);
    line-height: 1;
    font-size: 100%;
    font-family: 'Fira Code', monospace, 'Source Code Pro', serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  a{
    text-decoration: none;
  }

  p, dl{
    a{
      border-bottom: 1px var(--highlight) dotted;
      color: var(--postColor);

      &:visited{
        color: var(--texts);
      }
    }
  }

  button{
      border: none;
      margin: 0;
      padding: 0;
      width: auto;
      overflow: visible;

      background: transparent;

      cursor: pointer;
      color: inherit;
      font: inherit;

      
      line-height: normal;

      
      -webkit-font-smoothing: inherit;
      -moz-osx-font-smoothing: inherit;

      
      -webkit-appearance: none;

      &:focus{
        outline: none;
        border: none;
        box-shadow: none;
      }
    }

  body.dark {
    --borders: #38444d;
    --texts: #8899a6;
    --postColor: #eeeeee;
    --highlight: #00FF62;
    --mediumBackground: #192734;
    --background: #011016;
    --white: #fff;
    --black: #222;
    --blueTerminal: rgb(104, 253, 254);
    --danger: #de0909;
  }
  body.light {
    --borders: #dedede;
    --postColor: #333;
    --texts: #555555;
    --highlight: #058e48;
    --mediumBackground: #f5f5f5;
    --background: #eeeeee;
    --white: #fff;
    --black: #222;
    --blueTerminal: rgb(0,136,210);
    --danger: #de0909;
  }

`;
export default GlobalStyles;

// auxiliarColor: '#B1FF00',
//   primaryColor: '#00FF62',
