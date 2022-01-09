import {Header} from "./features/header/Header/styled";
import {ThemeProvider} from "styled-components";
import {theme} from "./core/theme";

function App() {
    return (<ThemeProvider theme={theme}>
            <>
                <Header/>
                tananan
            </>
        </ThemeProvider>
    );
}

export default App;
