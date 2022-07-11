import React from "react";
import Filter from "../components/Filter";
import SingleProduct from "../components/SingleProduct";
import { CartState } from "../context/context";
import { bookList } from "../data/BookData";

const ProductPage = () => {

    const { bookFilter: { sort, searchQuery, byCategory } } = CartState();

    const filteredBooks = () => {

        let filteredBookList = bookList;

        if (sort === "popularity") {
            filteredBookList = filteredBookList.sort((a, b) => a.id - b.id)
        };

        if (sort !== "popularity") {
            filteredBookList = filteredBookList.sort((a, b) =>
                sort === "lowfirst" ? a.price - b.price : b.price - a.price)
        };

        if (byCategory) {
            filteredBookList = filteredBookList.filter((bookItem) => bookItem.genre.includes(byCategory))
        };

        if (searchQuery) {
            filteredBookList = filteredBookList.filter((bookItem) => bookItem.title.toLowerCase().includes(searchQuery));
        }

        return filteredBookList;
    }



    return (
        <div className="bg-gray-50 min-w-[355px] pl-2 pt-2 divide-y mt-14">

            <div className="w-max sm:ml-10">
                <Filter />
            </div>


            <div className="bg-gray-50 px-2 pt-4 sm:pt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-16 place-items-center">
                    {filteredBooks().map((book, i) => <SingleProduct key={i} prod={book} />)}
                </div>
            </div>

        </div >
    )
}

export default ProductPage;