import React from "react";
import { Link } from 'react-router-dom';

const MainPage = () => {

    return (
        <div className="flex-column w-full px-4 sm:px-8 py-4 h-4/5 text-center">



            <div className="text-2xl sm:text-4xl px-4 text-gray-100 min-w-[302px] py-2 sm:py-6 md:py-10">
                <hr className="border-black pb-3 " />
                Search by Popular Genre
                <div className="flex flex-wrap justify-center text-lg sm:text-2xl pt-4 md:space-x-4 text-pink-800 font-semibold">
                    <div className="mr-2 mb-1 rounded-xl py-1 px-2 bg-gray-200">Fiction</div>
                    <div className="mr-2 mb-1 rounded-xl py-1 px-2 bg-gray-200">Non-fiction</div>
                    <div className="mr-2 mb-1 rounded-xl py-1 px-2 bg-gray-200">Romance</div>
                    <div className="mr-2 mb-1 rounded-xl py-1 px-2 bg-gray-200">Mystery</div>
                    <div className="mr-2 mb-1 rounded-xl py-1 px-2 bg-gray-200">Fantasy</div>
                </div>
                <hr className="border-black mt-3" />
            </div>
            <Link to="/books"><div className="bg-red-200 h-36 sm:h-48 cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 text-4xl text-gray-50 py-12 sm:py-16 min-w-max mb-3">
                Browse All Books
            </div></Link>
            <Link to="/books"><div className="bg-red-200 h-36 sm:h-48 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 text-4xl text-gray-50 py-12 sm:py-16 min-w-[302px]">
                Book Collections
            </div></Link>

        </div>
    )
}

export default MainPage; 