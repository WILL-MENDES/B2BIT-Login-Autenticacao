import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import AppRoutes from './Routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes/>
  </React.StrictMode>,
)
