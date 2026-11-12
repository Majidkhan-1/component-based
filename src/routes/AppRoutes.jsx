import React, { useEffect } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import HomePage from '../pages/HomePage'
import AuthLayout from '../Layouts/AuthLayout'
import MainLayout from '../Layouts/MainLayout'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/authSlice'
import PublicProtected from './protected/PublicProtected'
import MainProtected from './protected/MainProtected'
import ShopPage from '../pages/ShopPage'
import AboutPage from '../pages/AboutPage'

const AppRoutes = () => {

   const dispatch =  useDispatch();

   const hydrateUser = ()=>{
    console.log("Hydration process.......")
    let loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));

    if(!loggedInUser){
        toast.error("Unauthorised user!");
        return;
    }

    dispatch(addUser(loggedInUser));


   }

   useEffect(()=>{
    hydrateUser()
   },[])
    

        let router = createBrowserRouter([
        {
            path:"/",
           element:<PublicProtected/>,
           children:[
            {
                path:"",
                element:<AuthLayout/>,
            children:[
            {
                path:"",
                element:<LoginPage/>,
            },
            {
                path:"register",
                element:<RegisterPage/>
            },
            
            ]
            }
           ]

        },
        {
            path:"/main",
           element:<MainProtected/>,
           children:[
            {
                path:"",
                 element:<MainLayout/>,
            children:[
                {
                path:"",
                element:<HomePage/>
            },
            {
                path:"shop",
                element:<ShopPage/>
            },
            {
                path:"about",
                element:<AboutPage/>
            }
            ]
            }
           ]
        }
        ])
  return <RouterProvider router={router}/>
}

export default AppRoutes
