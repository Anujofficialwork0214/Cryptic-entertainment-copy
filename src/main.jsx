import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from './hooks/ThemeContext' // custom provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider> {/* ✅ No props needed */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
