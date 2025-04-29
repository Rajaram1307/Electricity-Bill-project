import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Calculator from './Calculator.jsx'
import Tablepage from './Tablepage.jsx'
let router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/Calculator',
    element:<Calculator/>
  },
  {
    path:'/Tablepage',
    element:<Tablepage/>
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
