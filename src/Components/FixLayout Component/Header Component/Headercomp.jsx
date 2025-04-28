import React from 'react'
import { MenuList } from '../../../Utlis/Files'
import { NavLink } from 'react-router-dom'
import Topheadercomp from './Topheadercomp'
import Middleheadercomp from './Middleheadercomp'

const Headercomp = () => {
  return (
    <div>

      {/*This is top header File */}
      <div>
        <Topheadercomp />
      </div>

      {/*This is  */}
      <div>
        <Middleheadercomp />
      </div>

      {/*This is Menubar Section*/}
      <div className='flex justify-evenly bg-blue-500 p-2'>
        {MenuList?.map((item1) => {
          return (
            <div
            key={item1?.id}
            className=' text-white'>
              <NavLink className={({ isActive }) => (isActive ? "border-b-2 border-blue-100 transition-all" : "")} to={item1?.path}>{item1?.name}</NavLink>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Headercomp
