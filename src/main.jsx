import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import Roots from './components/Roots/Roots.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Coffees from './components/Coffees/Coffees.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Roots></Roots>,
    children:[
      {
        path: "/",
        element:<Home></Home>,
        loader:()=>fetch('./categories.json')
      },
      {
        path: "/coffees",
        element:<Coffees></Coffees>
      },
      {
        path: "/dasboard",
        element:<Dashboard></Dashboard>
      }
     
    ]
  },
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
