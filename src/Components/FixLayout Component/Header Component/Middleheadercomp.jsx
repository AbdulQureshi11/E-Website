import React from 'react'
import { Allcategories } from '../../../Utlis/Files'
import { IoSearchOutline } from "react-icons/io5";
import Customdropdown from './Customdropdown';


const Middleheadercomp = () => {
    return (
        <div>

            <div className='flex  h-[100px] mr-10 ml-10'>

                {/*This is Logo Here Section*/}
                <div className='w-[25%] flex items-center text-[30px] font-bold text-blue-500'>
                    <h1>Logo Here</h1>
                </div>

                {/*This is All Category, input field Section*/}
                <div className='flex justify-center items-center w-[55%]'>
                    <div className='flex w-[75%]  h-[35%]'>

                        <div className='bg-gray-200 flex items-center justify-center w-[30%] rounded-l-md h-[100%]'>
                            {Allcategories?.map((middle) => {
                                return (
                                    <div 
                                    key={middle?.id}
                                    className=' flex items-center hover:text-blue-600  cursor-pointer gap-1'>
                                        <h1>{middle?.name}</h1>
                                        <h1>{middle?.icon}</h1>
                                    </div>
                                )
                            })}
                        </div>

                        <div className='flex w-[63%] bg-red-400'>
                            <input
                                type="text"
                                placeholder='Search Category'
                                className='flex w-[100%] outline-none border-t-2 border-b-2 p-3 border-gray-200'
                            />
                        </div>
                        <div className='flex w-[7%] items-center justify-center text-[25px] rounded-r-md bg-blue-500 text-white'>
                            <button><IoSearchOutline /></button>
                        </div>

                    </div>
                </div>

                {/*This is Login Button Section */}
                <div className='flex items-center w-[20%] justify-end '>
                    <Customdropdown />
                </div>




            </div>

        </div>
    )
}

export default Middleheadercomp
