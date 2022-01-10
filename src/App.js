import { Header } from "./features/header/Header/index";
import { ThemeProvider } from "styled-components";
import { theme } from "./core/theme";
import { ProductsTiles } from "./common/products/ProductsTiles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ProductsTiles />
    </ThemeProvider>
  );
}

export default App;
