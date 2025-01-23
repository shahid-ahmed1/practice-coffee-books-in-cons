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
import Cards from './components/Cards/Cards.jsx';
import CardDetails from './components/CardDetails/CardDetails.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Roots></Roots>,
    children:[
      {
        path: "/",
        element:<Home></Home>,
        loader:()=>fetch('../categories.json'),
        children:[
          {
            path:'/',
            element:<Cards></Cards>,
            loader:()=>fetch('../coffees.json')
          },
          {
            path:'/category/:category',
            element:<Cards></Cards>,
            loader:()=>fetch('../coffees.json')
          },
        ]
      },
      {
        path: "/coffees",
        element:<Coffees></Coffees>,
        loader:()=>fetch('../coffees.json')
      },
      {
        path: "/dasboard",
        element:<Dashboard></Dashboard>
      },
      {
        path: "/coffee/:id",
        element:<CardDetails></CardDetails>,
        loader:()=>fetch('../coffees.json')
      }
     
    ]
  },
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
