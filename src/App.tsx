import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from "./styles/theme/default"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./styles/global"
import { Router } from './Router'
import { CartContextProvaider } from './contexts'


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
      <CartContextProvaider>
        <Router/>
      </CartContextProvaider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

