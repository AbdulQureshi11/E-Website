import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../../features/counter/counterSlice'
import { FaPlus } from "react-icons/fa6";
import { GrFormSubtract } from "react-icons/gr";
import { MdOutlineLockReset } from "react-icons/md";
import { RiSortNumberDesc } from "react-icons/ri";

const Servicescomp = () => {

  const [amount, setamount] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const usedispatch = useDispatch()

  function handleincrementclick() {
    usedispatch(increment());
  }

  function handledecrementclick() {
    usedispatch(decrement());
  }

  function handledereset() {
    usedispatch(reset());
  }
  function byamount() {
    usedispatch(incrementByAmount(amount));
  }

  return (
    <div className='flex ml-5 mr-5 mt-5'>

      <div className='w-[20%] bg-blue-50 h-full mr-5 space-y-5 rounded-2xl'>
        <button
          onClick={handleincrementclick}
          className='bg-blue-100 w-full flex text-[20px] gap-10 p-2 rounded-2xl hover:bg-blue-200 items-center'>
          <FaPlus className='bg-gray-100 p-2 rounded-lg text-[30px]' />
          Increment
        </button>
        <button
          onClick={handledecrementclick}
          className='bg-blue-100 w-full flex text-[20px] gap-10 p-2 rounded-2xl hover:bg-blue-200 items-center'>
          <GrFormSubtract className='bg-gray-100 p-2 rounded-lg text-[30px]' />
          Decrement
        </button>
        <button
          onClick={handledereset}
          className='bg-blue-100 w-full flex text-[20px] gap-10 p-2 rounded-2xl hover:bg-blue-200 items-center'>
          <MdOutlineLockReset className='bg-gray-100 p-2 rounded-lg text-[30px]' />
          Reset
        </button>

        <input
          type='number'
          name='amount'
          value={amount}
          onChange={(e) => setamount(e.target.value)}
          placeholder='Enter Amount'
          className='w-full p-2 outline-none rounded-2xl text-[20px] bg-blue-100'
        />
        <button
          onClick={byamount}
          className='bg-blue-100 w-full flex text-[20px] gap-10 p-2 rounded-2xl hover:bg-blue-200 items-center'>
          <RiSortNumberDesc className='bg-gray-100 p-2 rounded-lg text-[30px]' />
          Add By Amount
        </button>
      </div>

      <div className=' text-[30px] w-[80%] h-[500px] bg-gray-100 rounded-2xl p-2'>
        <h1>Count: {count} </h1>
        <h1>Count: {count} </h1>
      </div>
    </div>
  )
}

export default Servicescomp

