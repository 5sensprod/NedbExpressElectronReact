import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '../frontend/src/App' // Réutilisation du composant App du frontend

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
