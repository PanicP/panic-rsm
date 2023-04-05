import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Main } from './components/Main'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
)
