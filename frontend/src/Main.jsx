import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './style/Index.css'
import Router from './router.jsx'

createRoot(document.getElementById('root')).render(
     <StrictMode>
          <RouterProvider router={Router}></RouterProvider>
     </StrictMode>
)