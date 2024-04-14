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

// Reducer Declaration

function cartReducer(state, action) {
    switch (action.type) {
        case "add": //add and update cart
            return addToCart(state, action);
        case "remove": //remove from cart
            return removeFromCart(state, action);
        default:
            return state;
    }
}

function addToCart(state, action) {
    if (state.length == 0) {
        return [
            {
                id: action.id,
                name: action.name,
                quantity: action.quantity,
                price: action.price,
            },
        ];
    } else {
        let index = state.findIndex((element) => element.id == action.id);
        if (index > -1) {
            return [
                ...state.slice(0, index),
                {
                    id: state[index].id,
                    name: state[index].name,
                    quantity: state[index].quantity + action.quantity,
                    price: state[index].price,
                },
                ...state.slice(index + 1),
            ];
        } else {
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    quantity: action.quantity,
                    price: action.price,
                },
            ];
        }
    }
}

function removeFromCart(state, action) {
    const index = state.findIndex((element) => element.id == action.id);
    if (index > -1) {
        return [...state.slice(0, index), ...state.slice(index + 1)];
    } else {
        return state;
    }
}

// Create a new array with all the element before index
// then add the rest after index ... is the Spread Operator
// slice return a list ==> Wich does not mutate the list (bad in React)

function App() {
    const [cartState, cartDispatch] = useReducer(cartReducer, []);

    const [modalStatus, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modalStatus);
    };

    return (
        <>
            <CartContext.Provider value={[cartState, cartDispatch]}>
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
