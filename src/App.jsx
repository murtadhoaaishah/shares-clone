import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Careers from './Components/Pages/Careers';
import Home from './Components/Pages/Home';
import Purpose from './Components/Pages/Purpose';
import Learn from './Components/Pages/Learn'

function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/purpose",
      element: <Purpose />,

    },
    {
      path: "/careers",
      element: <Careers />
    },
    {
      path: "/learn",
      element: <Learn />
    },
    {
      path: "",
      // element:</>
    }
  ])

  return <RouterProvider router={routes} />




}

export default App
