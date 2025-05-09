import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Signup/Signup';
import AuthProvider from './AuthProvider/AuthProvider';
// import Dasborad from './Components/Dasborad/Dasborad';
import AllServices from './Components/AllServices/AllServices';
import DetailescCard from './Components/DetailesCart.jsx/DetailescCard';
import AddService from './Components/AddService';
import ManageService from './Components/ManageService';
import MyShedule from './Components/MyShedule';
import Error from './Components/ErrorPage/Error';
import Update from './Components/Update';
import PrivetRoute from './Components/PrivetRoute.jsx/PrivetRoute';
import Addmission from './Components/Addmission/Addmission';
// import AddService from './Components/AddService';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<Signup></Signup>
      },
      {

        path:"/services",
        element:<AllServices></AllServices>,
        loader:()=>fetch('https://handy-server-site.vercel.app/AddServices'),
      },
      {

        path:"/addmission",
        element:<Addmission></Addmission>,
        loader:()=>fetch('https://handy-server-site.vercel.app/AddServices'),
      },
      {
        path:"/services/:id",
        element:<PrivetRoute><DetailescCard></DetailescCard></PrivetRoute>,
        loader:({params})=> fetch(`https://handy-server-site.vercel.app/AddServices/${params.id}`)
      },
      {
        path:"/addService",
        element:<PrivetRoute><AddService></AddService></PrivetRoute>
      },
      {
        path:"/manageProduct",
        element:<PrivetRoute><ManageService></ManageService></PrivetRoute>
      },
      {
        path:"/myshedule",
        element:<PrivetRoute><MyShedule></MyShedule></PrivetRoute>
      },
      {
        path:"/update/:id",
        element:<PrivetRoute><Update></Update></PrivetRoute>,
        loader: ()=> fetch('https://handy-server-site.vercel.app/AddServices')
      }
    ]
  },
 
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
