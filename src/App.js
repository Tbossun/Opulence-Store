import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Product from './Product/Product';
import Category from "./Category/Category";
import Home from "./Home/Home";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import "./app.scss"

const Layout = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/", element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/products/:id",
        element:<Category/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      }
    ]
  },
  
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
