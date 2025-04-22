import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from '../../features/counter/counterSlice'

const Aboutuscomp = () => {

  const [amount, setamount] = useState(0);

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  
  function handleincrementclick() {
    dispatch(increment());
  }
  function handledecrementclick() {
    dispatch(decrement());
  }
  function handlereset() {
    dispatch(reset());
  }
  function incrementamount() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className='text-[20px] flex  justify-center font-semibold'>
      <div className=' space-y-3 block'>
        <div>
          <button
            onClick={handleincrementclick}
            className=' w-[50px] p-2 bg-gray-300 rounded-md text-[20px]'>+</button>
          <p>Count: {count}</p>

          <button
            onClick={handledecrementclick}
            className=' w-[50px] p-2 bg-gray-300 rounded-md text-[20px]'>-</button>

          <button
            onClick={handlereset}
            className=' flex p-2 bg-gray-300 rounded-md text-[20px]'>Reset</button>
        </div>
      </div>

      <div className=''>
        <input
          type="number"
          value={amount}
          onChange={(e) => setamount(e.target.value)}
          className='w-[50px]  p-2 bg-gray-300 rounded-md text-[20px]'
          placeholder='Enter Amount'
        />
        <button
          onClick={incrementamount}
          className=' w-[50px] p-2 bg-gray-300 rounded-md text-[20px]'>Add</button>
      </div>
    </div>
  )
}

export default Aboutuscomp
