import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import {userRoutes} from './routes/UserRoutes.jsx'
import { useLanguageStore } from './stores/useLanguageStore'

// Initialize language on app load
const language = useLanguageStore.getState().language;
document.documentElement.lang = language;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={userRoutes} />
  </StrictMode>,
)
