import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

import { CyclesContextProvider } from './contexts/cycles-context'
import { Router } from './router'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
