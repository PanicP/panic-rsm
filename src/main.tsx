import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Main } from './components/Main'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)