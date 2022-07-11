import React from "react";
import { CartState } from "../context/context";

const Filter = () => {

    const { bookFilter: { byCategory, sort }, filterDispatch } = CartState();

    return (
        <div className="flex space-x-8 p-3 text-left">

            <div>
                <label htmlFor="categoryFilter" className="text-left text-xs pl-1">Select a Category</label>
                <br />
                <select
                    id="categoryFilter"
                    value={byCategory}
                    onChange={(e) => filterDispatch({ type: "category_filter", payload: e.target.value })}
                    name="categoryFilter"
                    className="p-0.5 py-1 pl-1 rounded-2xl border-0 focus:ring-0 focus:border-indigo-400 focus:border-2">

                    <option value="Book">All</option>
                    <option value="Fiction" selected>Fiction</option>
                    <option value="Non-fiction">Non-fiction</option>
                    <option value="Romance">Romance</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Fantasy">Fantasy</option>
                </select>
            </div>

            <div>
                <label htmlFor="priceSort" className="text-xs pl-1">Sort Products</label>
                <br />
                <select
                    id="priceSort"
                    value={sort}
                    onChange={(e) => filterDispatch({ type: "price_sort", payload: e.target.value })}
                    name="priceSort"
                    className="p-0.5 py-1 pl-1 rounded-2xl border-0 focus:ring-0 focus:border-indigo-400 focus:border-2">

                    <option value="popularity">By Popularity</option>
                    <option value="lowfirst">Price Low to High</option>
                    <option value="highfirst">Price High to Low</option>
                </select>
            </div>

        </div>
    )


}

export default Filter;