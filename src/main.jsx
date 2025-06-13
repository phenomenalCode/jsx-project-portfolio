import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App.jsx'

import './index.css'

<<<<<<< HEAD
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
=======
createRoot(document.getElementById('root')).render(
>>>>>>> upstream/main
  <StrictMode>
    <App />
  </StrictMode>,
)
