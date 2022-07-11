import React from "react";
import { GiBookCover } from 'react-icons/gi';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {

    return (


        <footer className="px-4 mt-10 divide-y bg-gray-100 border-t-2 border-gray-200 sm:px-10 lg:px-16 w-full min-w-[302px]">
            <div className="py-10 flex-column space-y-8 lg:flex lg:justify-between">

                <div className="lg:w-1/3">

                    <div className="w-24 mx-auto sm:mx-0 mb-2 ">
                        <div className="text-2xl text-indigo-600 pr-5 tracking-wide relative">booksta</div>
                        <div className="absolute text-2xl text-indigo-500 -translate-y-5 translate-x-[17px] h-6 overflow-clip"><GiBookCover /></div>
                    </div>
                    <div className="text-center sm:text-left text-gray-500 text-sm italic">2nd Floor, Gravity Building,  Northland Avenue, Portplace - 12 </div>


                </div>

                <div className="flex justify-around lg:justify-end space-x-6 lg:space-x-12 md:ml-12">

                    <div className="text-center">
                        <div>COMPANY</div>
                        <div className="text-center text-xs space-y-1 mt-1">
                            <div>About Us</div>
                            <div>Privacy Policy</div>
                            <div>Terms and Conditions</div>
                        </div>
                    </div>


                    <div className="text-center">
                        <div>PRODUCTS</div>
                        <div className="text-center text-xs space-y-1 mt-1">
                            <div>Fiction</div>
                            <div>Romance</div>
                            <div>Non-fiction</div>
                            <div>Thriller</div>
                            <div>Mystery</div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="uppercase text-center dark:text-gray-50">Social media</div>
                        <div className="flex justify-around">
                            <div><FaFacebookF /></div>
                            <div><BsTwitter /></div>
                            <div><AiFillInstagram /></div>
                        </div>
                    </div>

                </div>



            </div>

            <div className="py-6 text-xs text-center text-gray-600 dark:text-gray-400">© BOOKSTA 2022. All rights reserved.</div>

        </footer >





    )
}

export default Footer; 