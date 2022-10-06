import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import About from "../About/About";
import ErrorPage from "../ErrorPage/ErrorPage";
import Inventory from "../Inventory/Inventory";
import Orders from "../Orders/Orders";
import Shop from "../Shop/Shop";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Shop></Shop>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/orders',
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
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])

export default router;