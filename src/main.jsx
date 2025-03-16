import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Portal from './components/Portal/Portal.jsx'
import {createBrowserRouter, RouterProvider , createRoutesFromElements, Route } from 'react-router-dom'
import Police from './components/Police/Police.jsx'
import Ambulance from './components/Ambulance/Ambulance.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Portal/>}>
    <Route path='/Police' element={< Police/>} />  
    <Route path='/Ambulance' element={< Ambulance/>} />  

    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
