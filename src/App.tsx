import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LandingPage from './pages/LandingPage'
import ScrollToTop from './components/ScrollToTop'
import AppThemeProvider from "./components/ThemeProvider";
import './App.css'

function App() {

  return (
    <AppThemeProvider>
      <LandingPage />
      <ScrollToTop />
    </AppThemeProvider>
  )
}

export default App
