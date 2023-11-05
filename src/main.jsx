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
import Dasborad from './Components/Dasborad/Dasborad';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    
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
     

    ]
    
  },
  {
    path:"/dasborad",
    element:<Dasborad></Dasborad>,   
    children:[
      {
        path:"/dasborad",
        element:<h1>Dasboard</h1>
      },
     
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
