import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import AddCoffee from './Component/AddCoffee/AddCoffee';
import Home from './Component/Home/Home';
import Products from './Component/Products/Products';
import UpdateCoffee from './Component/UpdateCoffee/UpdateCoffee';


const router = createBrowserRouter([
 {
  path: "/",
  element: <App></App>,
  children: [
    {
      path:"/",
      element: <Home></Home>,
      loader: () => fetch('http://localhost:5000/coffee') ,
    },
    {
      path: "/home",
      element: <Home></Home>
    },
    {
      path:"/addcoffee",
      element: <AddCoffee></AddCoffee>
    },
    {
      path: "/products",
      element: <Products></Products>,
    },
    {
      path: "/updatecoffee/:id",
      element: <UpdateCoffee></UpdateCoffee>,
      loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
    }
  ]
 }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
