import React from 'react'
import { topheader1, topheader2 } from '../../../Utlis/Files'

const Topheadercomp = () => {
    return (
        <div>

            <div className='flex w-[100%] h-[30px]'>

                {/*This is TopHeader1 including EN and USD */}
                <div className='w-[50%] flex ml-10 gap-5 '>
                    {topheader1?.map((items) => {
                        return (
                            <div className='flex items-center hover:text-blue-600 cursor-pointer text-[20px]'>
                                <h1>{items?.name}</h1>
                                <h1>{items?.icon}</h1>
                            </div>
                        )
                    })}
                </div>

                {/*This is TopHeader2 including Wishlisht and Trackorder */}
                <div className='w-[50%] mr-10 gap-5 justify-end items-center flex'>
                    {topheader2?.map((items) => {
                        return (
                            <div className='flex items-center gap-1 hover:text-blue-600 cursor-pointer text-[20px]'>
                                <h1>{items?.icon}</h1>
                                <h1>{items?.name}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
            <hr className='border-[1px] border-gray-400 mr-10 ml-10 mt-1' />
        </div>
    )
}

export default Topheadercomp
