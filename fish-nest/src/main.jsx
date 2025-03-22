import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Root from './components/Root/Root.jsx';
import Fishes from './components/Fishes/Fishes.jsx';
import Products from './components/Products/Products.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path: '/',
        element : <Home></Home>
      },
      {
        path: 'fish/:fishCategory',
        element : <Products></Products>,
        loader : ()=> fetch('../public/fish.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
