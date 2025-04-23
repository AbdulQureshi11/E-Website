import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset, multiplybyamount } from '../../features/counter/counterSlice';
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
import { GrPowerReset } from "react-icons/gr";
import { LiaRandomSolid } from "react-icons/lia";

const Aboutuscomp = () => {

  const [amount, setamount] = useState();
  const [multiplyamount, setmultiplyamount] = useState();

  const count = useSelector((state) => state.counter.value);
  const usedispatch = useDispatch();

  function handleincrementclikc() {
    usedispatch(increment());
  }

  function handledecrementclick() {
    usedispatch(decrement());
  }

  function resetclick() {
    usedispatch(reset());
  }

  function clickbyamount() {
    usedispatch(incrementByAmount(amount)); 
  }

  function multiplybyclick() {
    usedispatch(multiplybyamount(multiplyamount));
  } 

  return (
    <div className='flex ml-5 mr-5 mt-5'>


      <div className='w-[20%] space-y-5 h-full bg-blue-50 rounded-2xl'>
        <button
          onClick={handleincrementclikc}
          className='flex items-center gap-5 p-2 bg-blue-100 w-full rounded-t-2xl text-[20px] hover:bg-blue-200'>
          <IoMdAdd className='bg-gray-100 p-2 rounded-xl text-[40px]' />
          Increment
        </button>
        <button
          onClick={handledecrementclick}
          className='flex items-center gap-5 p-2 space-y-5 bg-blue-100 w-full text-[20px] hover:bg-blue-200'>
          <RiSubtractLine className='bg-gray-100 p-2 rounded-xl text-[40px]' />
          Decrement
        </button>
        <button
          onClick={resetclick}
          className='flex items-center gap-5 p-2 space-y-5 bg-blue-100 w-full text-[20px] hover:bg-blue-200'>
          <GrPowerReset className='bg-gray-100 p-2 rounded-xl text-[40px]' />
          Reset Amount
        </button>

        <input
          type='number'
          name='amount'
          id='amount'
          value={amount}
          onChange={(e) => setamount(e.target.value)}
          placeholder='Enter Amount for Adding'
          className='w-full p-2 outline-none rounded-2xl text-[20px] bg-blue-100'
        />

        <button
          onClick={clickbyamount}
          className='flex items-center gap-5 p-2 rounded-b-2xl space-y-5 bg-blue-100 w-full text-[20px] hover:bg-blue-200'>
          <LiaRandomSolid className='bg-gray-100 p-2 rounded-xl text-[40px]' />
          Add This Amount
        </button>

        
        <input
          type='number'
          name='multiplyamount'
          id='multiplyamount'
          value={multiplyamount}
          onChange={(e) => setmultiplyamount(e.target.value)}
          placeholder='Enter Amount for Multiplying'
          className='w-full p-2 outline-none rounded-2xl text-[20px] bg-blue-100'
        />

        <button
          onClick={multiplybyclick}
          className='flex items-center gap-5 p-2 rounded-b-2xl space-y-5 bg-blue-100 w-full text-[20px] hover:bg-blue-200'>
          <LiaRandomSolid className='bg-gray-100 p-2 rounded-xl text-[40px]' />
          Multiply This Amount
        </button>
      </div>

      <div className='w-[80%] p-2 text-[30px] h-[500px] bg-gray-100 rounded-2xl ml-5'>
        <h1>Counter: {count} </h1>
      </div>
    </div>
  )
}

export default Aboutuscomp
