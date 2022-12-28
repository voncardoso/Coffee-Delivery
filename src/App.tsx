import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from "./styles/theme/default"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./styles/global"
import { Router } from './Router'


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

