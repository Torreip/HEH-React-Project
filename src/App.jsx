import { useState, createContext, useReducer } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Layout/Header";
import Products from "./Components/Product/Products";
import ProductPage from "./Components/Product/ProductPage";
import Cart from "./Components/Cart/Cart";
import ErrorToaster from "./Components/Layout/ErrorToaster";

// Context  Declaration

export const CartContext = createContext();

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD": //add and update cart
            return;
        case "REMOVE": //remove from cart
            return;
        case "RESET":
            return;
    }
    return state;
}

function App() {
    const [modalStatus, setModal] = useState(false);
    //const updateCartItem = (index, fieldToUpdate, updatedValue) => {
    //    setCartItems(
    //        cartItems.map((data, mapIndex) => {
    //            if (mapIndex == index) {
    //                data[fieldToUpdate] = updatedValue;
    //            }
    //            return data;
    //        })
    //    );
    //};
    //const removeCartItem = (index) => {
    //    setCartItems([
    //        ...cartItems.slice(0, index),
    //        ...cartItems.slice(index + 1),
    //    ]);
    //};

    //Create a new array with all the element before index
    //then add the rest after index ... is the Spread Operator
    //slice return a list ==> Wich does not mutate the list (bad in React)

    const [cartAmount, cartDispatch] = useReducer(cartReducer, []);

    const toggleModal = () => {
        setModal(!modalStatus);
    };

    return (
        <>
            <CartContext.Provider
                value={[
                    cartItems,
                    setCartItems,
                    updateCartItem,
                    removeCartItem,
                    cartAmount,
                    cartDispatch,
                ]}
            >
                <BrowserRouter>
                    {modalStatus && (
                        <Cart
                            modalStatus={modalStatus}
                            cartHandler={toggleModal}
                        />
                    )}
                    <Header cartHandler={toggleModal} />

                    <Routes>
                        <Route path="/" element={<Products />} />
                        <Route path="/product/:id" element={<ProductPage />} />
                        <Route
                            path="*"
                            element={
                                <ErrorToaster
                                    errorMessage={
                                        "404 - This page dosn't exist 💔"
                                    }
                                />
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </CartContext.Provider>
        </>
    );
}

export default App;
