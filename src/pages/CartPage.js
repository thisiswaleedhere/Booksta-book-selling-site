import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../context/context";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";


const CartPage = () => {

    const [placed, setPlaced] = useState(false);
    const [total, setTotal] = useState(0);

    const { book: { cartItems }, dispatch } = CartState();

    useEffect(() => {
        setTotal(cartItems.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0));
    }, [cartItems]);


    return (


        <div className="text-center min-w-[320px] mt-28 min-h-[250px]">


            {placed &&
                <div className="mt-36 px-6">
                    <div className="w-6 text-green-700 mb-2 mx-auto text-3xl"><FaCheckCircle /></div>
                    <div className="text-indigo-600 mb-2"> Thank you for your purchase.</div>
                    <div>Your order has been placed and will be delivered to you within 24 hours.</div>
                    <Link to="/books" >
                        <button className="text-indigo-600 font-semibold px-2 py-1 hover:underline mt-4" onClick={(e) => { setPlaced(false) }}>
                            Continue shopping</button>
                    </Link>
                </div>
            }



            {!cartItems.length ? <div></div> :

                <div className="w-3/4 md:w-1/2 mx-auto mt-6">
                    <div className="text-2xl mb-6 font-semibold text-indigo-700">Cart</div>
                    <div className="flex justify-between text-xs text-gray-700 mb-1"><div className="w-3/5 text-left">Item</div><div>Quantity</div><div>Price</div></div>
                    <hr className="mb-2" />

                    {cartItems.map((cItem, i) =>
                        <div className=" mb-4 ">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center w-3/5">
                                    <img className="h-20 " src={cItem.image} alt="Book Cover" />
                                    <div className="pl-2 sm:pl-4 text-left font-semibold">{cItem.title}</div>
                                </div>

                                <div className="flex justify-between items-center text-lg bg-gray-100 rounded-2xl px-2 text-indigo-500">
                                    <AiOutlinePlusCircle className="cursor-pointer" onClick={() => dispatch({ type: 'book_increase', payload: cItem })} />
                                    <div className="mx-2 sm:mx-4 text-gray-500 font-semibold">{cItem.qty}</div>
                                    {cItem.qty === 1 ?
                                        <RiDeleteBin6Line className="text-red-800 cursor-pointer" onClick={() => dispatch({ type: 'book_removed', payload: cItem })} /> :
                                        <AiOutlineMinusCircle className="cursor-pointer" onClick={() => dispatch({ type: 'book_decrease', payload: cItem })} />}
                                </div>

                                <div className="text-gray-600 font-semibold flex"><div>{Number(cItem.price) * Number(cItem.qty)} </div></div>
                            </div>
                        </div>
                    )}

                    <hr className="mb-2" />
                    <div className="flex justify-between text-gray-600 "><div>Total</div><div className="font-semibold text-xl">$ {total}</div></div>
                    <hr className="mt-2" />

                    <div className="bg-indigo-500 text-gray-50 px-3 py-1 rounded-2xl shadow-xl mt-6 cursor-pointer"
                        onClick={() => {
                            cartItems.map((cItem) => dispatch({ type: 'book_removed', payload: cItem }));
                            setPlaced(true);
                        }}>
                        Place Order
                    </div>
                </div>

            }


        </div >
    )
}

export default CartPage;

