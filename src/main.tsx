import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ThemeSwitcher from './components/ThemeSwitcher'
import Home from './pages/Home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeSwitcher>
      <Home />
    </ThemeSwitcher>
  </StrictMode>,
)
