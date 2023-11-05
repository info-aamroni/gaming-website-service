"use client"

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaBell } from "react-icons/fa";
import { HiOutlineBell, HiOutlineSearch, HiOutlineShoppingBag, HiX } from "react-icons/hi";


const Navbar = () => {

    // Search State 
    const [isClick, setIsClick] = useState(false)

    useEffect(() => {
        const closePopup = (event: any) => {
            if (isClick && event.target.closest('.popup-content') === null) {
                setIsClick(false);
            }
        };

        if (isClick) {
            document.body.addEventListener('click', closePopup);
        }

        return () => {
            document.body.removeEventListener('click', closePopup);
        };
    }, [isClick]);

    console.log(isClick);


    return (
        <div className='bg-[#010717] text-white h-[60px] grid xl:grid-cols-7 2xl:grid-cols-8 3xl:grid-cols-9'>

            {/* Logo */}
            <div className='m-auto'>
                <h3 className='lg:text-2xl 2xl:text-3xl 3xl:text-[35px]  text-[#5F01F2] font-bold italic'>GAMEX</h3>
            </div>

            {/* Navigation */}
            <div className=' xl:col-span-6 2xl:col-span-6 3xl:col-span-7 '>
                <div className='flex 2xl:justify-between 3xl:justify-start items-center xl:gap-10 3xl:gap-20 h-full'>

                    <div>
                        <div className='relative'>
                            <input
                                type="text"
                                className='py-1 pl-10 pr-3 bg-transparent border border-[#5F01F2]  rounded-[5px] h-[35px] 2xl:w-[300px]'
                                placeholder='Search game...'
                                onClick={() => setIsClick(true)}
                            />

                            <div className='absolute top-1/2 left-3 transform -translate-y-1/2 text-xl text-[#696969]' >
                                <HiOutlineSearch />
                            </div>
                        </div>

                        {/* Input PopUp */}
                        {
                            isClick && (
                                <>
                                    <div className='fixed bg-black w-full h-full top-0 left-0 bg-opacity-60 flex justify-center items-center'>
                                        <div className='bg-white p-5 rounded-[5px] shadow-lg text-black w-3/12 relative popup-content'>

                                            {/* Cross PopUp */}
                                            <span
                                                className='bg-[#5F01F2] rounded-[5px] rounded-br-none rounded-tl-none p-2 absolute right-0 top-0 text-white cursor-pointer'
                                                onClick={() => setIsClick(false)}

                                            >
                                                <HiX />
                                            </span>

                                            {/* Input Search */}
                                            <div className='relative flex justify-center items-center h-full mt-8'>
                                                <input type="text" className='border-4 border-[#5F01F2] w-full rounded-[5px] py-3 pr-3 pl-10 outline-none' />

                                                <div className='absolute top-1/2 left-2 transform -translate-y-1/2 text-3xl text-[#5F01F2]'>
                                                    <HiOutlineSearch />
                                                </div>
                                            </div>

                                            {/* Recent Search */}
                                            <div className='py-5'>
                                                <p>Recent</p>

                                                <ul className='mt-1 border rounded-[5px]'>
                                                    <span className='flex justify-between items-center border-b hover:bg-[#5F01F2] hover:text-white py-3 px-3'>
                                                        <li className=' '>How it works?</li>
                                                        <HiX />
                                                    </span>

                                                    <span className='flex justify-between items-center border-b hover:bg-[#5F01F2] hover:text-white py-3 px-3'>
                                                        <li className=' '>Test</li>
                                                        <HiX />
                                                    </span>

                                                    <span className='flex justify-between items-center border-b hover:bg-[#5F01F2] hover:text-white py-3 px-3'>
                                                        <li className=' '>Base Nav</li>
                                                        <HiX />
                                                    </span>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </>
                            )
                        }

                    </div>

                    <div className='flex items-center'>
                        <ul className='flex items-center xl:gap-8 3xl:gap-16 text-sm font-semibold'>
                            <li>HOME</li>
                            <li>CONTACT US</li>
                            <li>GUIDES</li>
                            <li>LOYLTY</li>
                        </ul>
                    </div>

                    {/*  */}
                    <div className='xl:space-x-5 2xl:space-x-5 font-semibold'>
                        <Link href="#"><button className='w-[100px] rounded-[5px] text-semibold text-xs py-2 border border-[#5F01F2]'>REGISTER</button></Link>
                        <Link href="#"><button className='w-[100px] rounded-[5px] text-semibold text-xs py-2 bg-[#5F01F2]'>LOGIN</button></Link>
                    </div>

                    {/*  */}
                    <div className='flex items-center gap- 3xl:gap-10 text-2xl text-[#5F01F2]'>
                        <HiOutlineBell />
                        <HiOutlineShoppingBag />
                    </div>
                </div>
            </div>

            <div className='hidden 2xl:block'></div> 
        </div>
    );
};

export default Navbar;