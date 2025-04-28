import React from 'react'
import { topheader1, topheader2 } from '../../../Utlis/Files'

const Topheadercomp = () => {
    return (
        <div>

            <div className='flex w-[100%] h-[30px]'>

                {/*This is TopHeader1 including EN and USD */}
                <div className='w-[50%] flex ml-10 gap-5 '>
                    {topheader1?.map((header1) => {
                        return (
                            <div 
                            key={header1?.id}
                            className='flex items-center hover:text-blue-600 cursor-pointer '>
                                <h1>{header1?.name}</h1>
                                <h1>{header1?.icon}</h1>
                            </div>
                        )
                    })}
                </div>

                {/*This is TopHeader2 including Wishlisht and Trackorder */}
                <div className='w-[50%] mr-10 gap-5 justify-end items-center flex'>
                    {topheader2?.map((header2) => {
                        return (
                            <div 
                            key={header2?.id}
                            className='flex items-center gap-1 hover:text-blue-600 cursor-pointer '>
                                <h1>{header2?.icon}</h1>
                                <h1>{header2?.name}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
            <hr className='border-[1px] border-gray-300 mr-10 ml-10 ' />
        </div>
    )
}

export default Topheadercomp
