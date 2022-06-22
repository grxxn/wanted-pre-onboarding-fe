import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}
 * {
   box-sizing:border-box;
   outline:none;
   border:none;
 }
 html, body {
  height: 100%
 }
 button {
  background-color: inherit;
  border: none;
 }
 a {
  color: inherit;
  text-decoration: none;
 }
 #root {
  min-height: 100vh;
  background-color: #f2f2f2;
 }
 .blind {
  display: none;
 }
`;

export default GlobalStyles;
