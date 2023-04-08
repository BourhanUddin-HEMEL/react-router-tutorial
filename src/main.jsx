import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import SlideBar from './Components/SlideBar/SlideBar'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Home></Home>
  },
  {
    path:'/slider',
    element:<SlideBar></SlideBar>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
