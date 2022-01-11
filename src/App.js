import { ThemeProvider } from "styled-components";
import { theme } from "./core/theme";
import { StorePage } from "./features/storePage/StorePage/";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StorePage />
    </ThemeProvider>
  );
}

export default App;
