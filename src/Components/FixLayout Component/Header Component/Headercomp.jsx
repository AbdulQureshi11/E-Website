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
        {MenuList?.map((items) => {
          return (
            <div className='font-semibold text-white'>
              <NavLink className={({ isActive }) => (isActive ? "border-b-2 border-blue-100 transition-all" : "")} to={items?.path}>{items?.name}</NavLink>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Headercomp
