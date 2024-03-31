import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorToaster from "./Components/ErrorToaster.jsx";
import { productLoader } from "./Components/helper.js";
import ProductPage from "./Components/Product/ProductPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: (
            <ErrorToaster
                errorMessage={
                    "404 - This page dosn't exist <a href='/'>Go back to home</a>"
                }
            />
        ),
    },
    {
        path: "product/:productID",
        element: <ProductPage />,
        loader: productLoader,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
