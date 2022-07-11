import { createContext, useContext, useReducer } from "react";
import { bookList } from "../data/BookData";
import BookReducer from "./Reducers";
import { FilterReducer } from "./Reducers";

export const CartContext = createContext();


const Context = ({ children }) => {


    const [book, dispatch] = useReducer(BookReducer, {
        bookList: bookList,
        cartItems: [],
    });

    const [bookFilter, filterDispatch] = useReducer(FilterReducer, {
        byCategory: "",
        searchQuery: "",
        sort: "popularity"
    });

    return (
        <CartContext.Provider value={{ book, dispatch, bookFilter, filterDispatch }}>
            {children}
        </CartContext.Provider>
    )
};

export default Context;


export const CartState = () => {
    return useContext(CartContext);
}




