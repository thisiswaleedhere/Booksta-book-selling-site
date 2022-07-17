import React from "react";
import { GiBookCover } from 'react-icons/gi';
import { AiFillInstagram, AiOutlineGithub } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Footer = ({ setPpScroll, setTcScroll }) => {


    return (


        <footer className="px-4 mt-10 divide-y bg-gray-100 border-t-2 border-gray-200 sm:px-10 lg:px-16 w-full min-w-[355px] max-w-[1920px] mx-auto">
            <div className="py-10 flex-column space-y-8 lg:flex lg:justify-between">

                <div className="lg:w-1/3">

                    <Link to="/" >
                        <div className="w-24 mx-auto sm:mx-0 mb-2 ">
                            <div className="text-2xl text-indigo-600 pr-5 tracking-wide relative">booksta</div>
                            <div className="absolute text-2xl text-indigo-500 -translate-y-5 translate-x-[17px] h-6 overflow-clip"><GiBookCover /></div>
                        </div>
                    </Link>
                    <div className="text-center sm:text-left text-gray-500 text-sm italic">2nd Floor, Gravity Building,  Northland Avenue, Portplace - 12 </div>


                </div>

                <div className="flex justify-around lg:justify-end space-x-6 lg:space-x-12 md:ml-12">

                    <div className="text-center">
                        <Link to="/company"><div>COMPANY</div></Link>
                        <div className="text-center text-xs space-y-1 mt-1">
                            <Link to="/company"><div>About Us</div></Link>
                            <Link to="/company"><div onClick={() => { setPpScroll(true) }}>Privacy Policy</div></Link>
                            <Link to="/company"><div onClick={() => { setTcScroll(true) }}>Terms and Conditions</div></Link>
                        </div>
                    </div>


                    <div className="text-center">
                        <Link to="/"><div>PRODUCTS</div>
                            <div className="text-center text-xs space-y-1 mt-1">
                                <div>Fiction</div>
                                <div>Romance</div>
                                <div>Non-fiction</div>
                                <div>Thriller</div>
                                <div>Mystery</div>
                            </div></Link>
                    </div>

                    <div className="space-y-3">
                        <div className="uppercase text-center dark:text-gray-50">Social media</div>
                        <div className="flex justify-around">
                            <div><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" ><FaFacebookF /></a></div>
                            <div><a href="https://www.twitter.com/" target="_blank" rel="noreferrer" ><BsTwitter /></a></div>
                            <div><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" ><AiFillInstagram /></a></div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="py-6 text-xs text-center text-gray-600 dark:text-gray-400">© BOOKSTA 2022. All rights reserved.</div>
            <div className="py-3 text-xs text-center text-gray-600 dark:text-gray-400 flex justify-between px-10">
                <div>Made by MW</div>
                <div className="flex justify-center space-x-4 mt-1">
                    <div><AiOutlineGithub /></div>
                    <div><CgWebsite /></div>
                </div>
            </div>

        </footer >





    )
}

export default Footer; 