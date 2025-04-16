import React from 'react'
import { MenuList } from '../../../Utlis/Files'
import { NavLink } from 'react-router-dom'

const Headercomp = () => {
  return (
    <div>

      <div className='flex justify-evenly bg-blue-500 p-2'>
        {MenuList?.map((items) => {
          return (
            <div className='font-semibold text-white'>
              <NavLink className={({isActive}) => (isActive ? "border-b-2 border-white transition-all" : "")} to={items?.path}>{items?.name}</NavLink>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Headercomp
