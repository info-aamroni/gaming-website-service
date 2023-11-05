import Image from 'next/image';
import React from 'react';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';

const BattleBoost = () => {
    return (
        <div className='grid grid-cols-8 text-white'>

            <div className='bg-[#010717] h-screen'>

                <div className="faded-border "></div>

                <div className='flex justify-center items-center gap-6 py-5 font-semibold'>
                    <div className='flex items-center gap-1 px-3 py-2 border-[1px] rounded-[5px] border-[#5E5E5E]'>
                        <HiOutlineCurrencyDollar className="text-2xl text-[#5E5E5E]" />
                        <button> EUR</button>
                    </div>
                    <div className='flex items-center gap-1 px-3 py-2 border-[1px] rounded-[5px] border-[#5F01F2]'>
                        <HiOutlineCurrencyDollar className="text-2xl text-[#5F01F2]" />
                        <button> DLR</button>
                    </div>
                </div>

                <div className="faded-border "></div>


                <div className=' pt-5 text-sm font-semibold'>
                    <ul className='cursor-pointer'>
                        <div className='flex items-center gap-2 hover:bg-[#5D01EE] bg-opacity-30 py-5 pl-11'>
                            <Image
                                src={'/destiny-2.svg'}
                                width={24}
                                height={24}
                                alt='destiny'
                            />
                            <p>DESTINY</p>
                        </div>
                        <div className='flex items-center gap-2 hover:bg-[#5D01EE] bg-opacity-30 py-5 pl-11'>
                            <Image
                                src={'/final-fantasy-xiv.svg'}
                                width={24}
                                height={24}
                                alt='final-fantasy-xiv.svg'
                            />
                            <p>FINAL FANTASY XIV</p>
                        </div>
                        <div className='flex items-center gap-2 hover:bg-[#5D01EE] bg-opacity-30 py-5 pl-11'>
                            <Image
                                src={'/call-of-duty.svg'}
                                width={24}
                                height={24}
                                alt='call-of-duty.svg'
                            />
                            <p>CALL OF DUTY</p>
                        </div>
                        <div className='flex items-center gap-2 hover:bg-[#5D01EE] bg-opacity-30 py-5 pl-11'>
                            <Image
                                src={'/world-of-warcraft.svg'}
                                width={24}
                                height={24}
                                alt='/world-of-warcraft.svg'
                            />
                            <p>WORLD OF WARCRAFT</p>
                        </div>
                        {/* <li className='py-5 pl-11'>FINAL FANTASY XIV</li>
                        <li className='py-5 pl-11'>CALL OF DUTY</li>
                        <li className='py-5 pl-11'>WORLD OF WARCRAFT</li> */}
                    </ul>
                </div>

                <div className="faded-border "></div>
            </div>
        </div>
    );
};

export default BattleBoost;