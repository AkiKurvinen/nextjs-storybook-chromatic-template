import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

body {
  scrollbar-width: thin;
  scrollbar-color: var(--primary) var(--paper);
  margin: 0;
  padding: 0;
  min-height: 100vh;
}
body::-webkit-scrollbar {
  width: 15px;
}
body::-webkit-scrollbar-track {
  background: var(--paper);
}
body::-webkit-scrollbar-thumb {
  background-color: var(--primary);
  border-radius: 6px;
  border: 3px solid var(--paper);
}
`;
