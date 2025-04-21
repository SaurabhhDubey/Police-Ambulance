import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Portal from './components/Portal/Portal.jsx'
import {createBrowserRouter, RouterProvider , createRoutesFromElements, Route } from 'react-router-dom'
import Police from './components/Police/police.jsx'
import Ambulance from './components/Ambulance/Ambulance.jsx'
import Contact from './components/Police/Contact.jsx'
import About from './components/Police/About.jsx'
import Register from './components/Ambulance/Register.jsx'
import Information from './components/Ambulance/Information.jsx'


//const router = createBrowserRouter(
  //createRoutesFromElements(
    //<Route path='' element={<Portal/>}>
    //<Route path='/Police' element={< Police/>} />  
    //<Route path='/Ambulance' element={< Ambulance/>} />  

    //</Route>
 // )
//)


const router = createBrowserRouter([
  { path: "/", element: <Portal /> },
  { path: "/Police", element: <Police /> },
  { path: "/Ambulance", element: <Ambulance /> },
  {path:"/Contact" , element:<Contact/>},
  {path:"/About", element:<About/>},
  {path:"/Register",element:<Register/>},
  {path:"/Information",element:<Information/>},
  

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
