import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./assets/utils/GlobalStyles";
import theme from "./assets/theme";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.defaultWhite};
  height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <h1>sdsd</h1>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
