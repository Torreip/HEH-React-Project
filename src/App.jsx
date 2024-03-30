import { useState, createContext, useReducer } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Layout/Header";
import Products from "./Components/Product/Products";
import Cart from "./Components/Cart/Cart";

export const CartContext = createContext();

function cartTotal(state, action) {
    if (action.add) {
        state += action.add;
    } else if (action.remove) {
        state -= action.remove;
    }
    return state;
}

function App() {
    const [modalStatus, setModal] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const updateCartItem = (index, fieldToUpdate, updatedValue) => {
        setCartItems(
            cartItems.map((data, mapIndex) => {
                if (mapIndex == index) {
                    data[fieldToUpdate] = updatedValue;
                }
                return data;
            })
        );
    };
    const removeCartItem = (index) => {
        setCartItems([
            ...cartItems.slice(0, index),
            ...cartItems.slice(index + 1),
        ]);
    };

    //Create a new array with all the element before index
    //then add the rest after index ... is the Spread Operator
    //slice return a list ==> Wich does not mutate the list (bad in React)

    const [cartAmount, cartDispatch] = useReducer(cartTotal, 0);

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
                {modalStatus && (
                    <Cart modalStatus={modalStatus} cartHandler={toggleModal} />
                )}
                <Header cartHandler={toggleModal} />
                <Products />
            </CartContext.Provider>
        </>
    );
}

export default App;
