import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { IoAddSharp } from "react-icons/io5";
import { increment, decrement, reset, incrementByAmount } from '../../features/counter/counterSlice'
import { RiSubtractLine } from "react-icons/ri";
import { RiResetLeftFill } from "react-icons/ri";
import { LiaRandomSolid } from "react-icons/lia";


const Clientcomp = () => {

  const [amount, setamount] = useState();

  const count = useSelector((state) => state.counter.value);
  const usedispatch = useDispatch();

  function incrementbyclick  () {
    usedispatch(increment());
  }
  function decrementbyclick  () {
    usedispatch(decrement());
  }
  function resetamount  () {
    usedispatch(reset());
  }
  function addingamount  () {
    usedispatch(incrementByAmount(amount));
  }


  return (
    <div className='flex mt-5 ml-5 mr-5'>
      <div className='w-[20%] bg-blue-100 space-y-5 rounded-2xl'>
        <button 
        onClick={incrementbyclick}
        className='flex items-center gap-6 p-2 text-[20px] hover:bg-blue-300 bg-blue-200 w-full rounded-t-2xl'>
        <IoAddSharp className='bg-gray-100 p-2 text-[40px] rounded-md' />
          Increment
        </button>

        <button 
        onClick={decrementbyclick}
        className='flex items-center gap-6 p-2 text-[20px] hover:bg-blue-300 bg-blue-200 w-full'>
        <RiSubtractLine className='bg-gray-100 p-2 text-[40px] rounded-md' />
          Decrement
        </button>

        <button 
        onClick={resetamount}
        className='flex items-center gap-6 p-2 text-[20px] hover:bg-blue-300 bg-blue-200 w-full'>
        <RiResetLeftFill className='bg-gray-100 p-2 text-[40px] rounded-md' />
          Reset
        </button>

        <input 
        type="number"
        name='amount'
        placeholder='Enter Amount'
        className='w-full p-3 bg-blue-200 text-[20px] outline-none'
        id='amount' 
        onChange={(e) => setamount(e.target.value)}
        value={amount}

         />
         <button 
        onClick={addingamount}
        className='flex items-center gap-6 p-2 text-[20px] hover:bg-blue-300 bg-blue-200 w-full'>
        <LiaRandomSolid className='bg-gray-100 p-2 text-[40px] rounded-md' />
          Adding This Number
        </button>


      </div>
      <div className='w-[80%] p-3 text-[30px] bg-gray-100 ml-5 rounded-2xl h-[300px]'>
        <h1>Count: {count} </h1>
      </div>
    </div>
  )
}

export default Clientcomp
