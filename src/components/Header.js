import React from "react";
import { BiSearchAlt } from 'react-icons/bi';
import { CgShoppingCart } from 'react-icons/cg';
import { GiBookCover } from 'react-icons/gi';
import { Link } from "react-router-dom";
import { CartState } from "../context/context";

const Header = () => {

    const { book: { cartItems }, bookFilter: { searchQuery }, filterDispatch } = CartState();

    return (
        <div className="bg-gray-100 border-b-2 border-gray-200 w-full min-w-[355px] max-w-[1920px] mx-auto flex-column sm:flex px-12 py-3 h-[104px] sm:h-16 justify-between top-0 fixed">

            <Link to="/" ><div className="w-24 mx-auto sm:mx-0 mb-3 sm:mb-0"><div className="text-2xl text-indigo-600 pr-5 tracking-wide relative">booksta</div><div className="absolute text-2xl text-indigo-500 -translate-y-5 translate-x-[17px] h-6 overflow-clip"><GiBookCover /></div></div></Link>

            <div className="flex w-full sm:w-1/2">

                <div className="flex relative w-full">
                    <input
                        className="w-full font-sansserif text-sm rounded-full bg-gray-50 drop-shadow-xl h-8 border-0 appearance-none focus:ring-0 focus:border-yellow-400 focus:border-2 active:ring-0 text-gray-800 p-2 indent-2"
                        id="search-book"
                        type="text"
                        placeholder="Search for a book here"
                        name="searchBook"
                        value={searchQuery}
                        onChange={(e) => { filterDispatch({ type: "search_query", payload: e.target.value }) }}
                    //onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    />


                    <div className="absolute top-1/2 right-1 -translate-y-3 sm:-translate-y-4  py-1 h-6 drop-shadow-md bg-gray-100 hover:bg-indigo-500 px-4 rounded-r-full text-mono hover:shadow-lg hover:text-white font-bold text-indigo-600">
                        <BiSearchAlt />
                    </div>

                </div>

                {cartItems.length > 0 ?
                    <Link to="/cart">
                        <div className="flex text-2xl ml-6 pt-1 text-indigo-600"><CgShoppingCart />
                            <sup>{cartItems.length > 9 ? <div className="bg-indigo-600 rounded-full text-[10px] h-4 w-4 px-0.5 pt-2 text-gray-50">{cartItems.length}</div> :
                                <div className="bg-indigo-600 rounded-full text-xs h-4 w-4 pl-[5px] text-gray-50">{cartItems.length}</div>}</sup>
                        </div>
                    </Link> :

                    <div className="text-2xl ml-6 pt-1 text-indigo-600 cursor-not-allowed"><CgShoppingCart />
                    </div>}





            </div>

        </div>
    )
}

export default Header;

//
//
//