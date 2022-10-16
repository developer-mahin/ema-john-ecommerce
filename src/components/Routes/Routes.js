import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import About from "../About/About";
import ErrorPage from "../ErrorPage/ErrorPage";
import Inventory from "../Inventory/Inventory";
import productsAndCartLoader from "../Loaders/ProductsAndCartLoader";
import Login from "../Login/Login";
import Orders from "../Orders/Orders";
import Shop from "../Shop/Shop";
import SignUp from "../SignUp/SignUp";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                loader: () => {
                    return fetch('products.json')
                },
                element: <Shop></Shop>
            },
            {
                path: '/shop',
                loader: () => {
                    return fetch('products.json')
                },
                element: <Shop></Shop>
            },
            {
                path: '/orders',
                loader: productsAndCartLoader,
                element: <Orders></Orders>
            },
            {
                path: '/inventory',
                element: <Inventory></Inventory>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <SignUp></SignUp>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])

export default router;