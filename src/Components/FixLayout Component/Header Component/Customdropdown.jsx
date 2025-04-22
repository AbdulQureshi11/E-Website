import React, { useState } from 'react'
import { FaUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';



const Customdropdown = () => {
    const [dropdown, setdropdown] = useState(false);
    return (
        <div className='relative'>
            <div
                onClick={() => setdropdown(!dropdown)}
                className=''>
                <button
                    className=' flex justify-evenly bg-blue-500  mr-20 shadow-md text-white font-semibold items-center w-[100px] p-1 rounded-md'>
                    Login <FaUser className=' font-bold' />
                </button>
            </div>

            {dropdown ?
                <div
                    onClick={() => setdropdown(!dropdown)}
                    className='absolute top-8 bg-white w-[100px] rounded-md font-semibold'>
                    <Link
                        to='/login'>
                        <h1 className='hover:bg-blue-100 p-2 rounded-t-md '>Login</h1>
                    </Link>
                    <Link
                        to='/signup'>
                        <h1 className='hover:bg-blue-100 p-2 rounded-b-md'>Signup</h1>
                    </Link>
                </div> : null}
        </div>
    )
}

export default Customdropdown
