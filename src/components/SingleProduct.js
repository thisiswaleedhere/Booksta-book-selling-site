import React from "react";
import { CartState } from "../context/context";

const SingleProduct = ({ prod }) => {

    const { book: { cartItems }, dispatch } = CartState();
    //console.log(cartItems);

    return (

        <div className="p-2 max-w-[175px] h-[360px]">
            <img className="bg h-60" src={prod.image} alt="Book Cover" />
            <div className="font-bold pt-2 h-12 leading-4">
                {prod.title}
            </div>
            <div className="text-gray-600 text-xs">{prod.author}</div>
            <div className="flex justify-between pt-1">
                <div className=" text-gray-600 font-semibold pt-1"> ${prod.price} </div>

                <button className="bg-indigo-500 h-6 font-semibold text-xs px-2 rounded-xl text-gray-50 cursor-pointer py-1"
                    onClick={() => { (cartItems.findIndex((item) => item.id === prod.id) > -1) ? dispatch({ type: 'book_increase', payload: prod }) : dispatch({ type: 'book_added', payload: prod }) }}>
                    Add to Cart
                </button>

            </div>
        </div>

        // 
    )
}

export default SingleProduct;