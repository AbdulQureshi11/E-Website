import React, { useState } from 'react'
import { Dashboardmenu } from '../../Utlis/Dashboardpage'
import Addproductcomp from '../Dashboard Component/Addproductcomp';
import Addcategoriescomp from '../Dashboard Component/Addcategoriescomp';
import Addusercomp from '../Dashboard Component/Addusercomp';

const Servicescomp = () => {
  const [selected, setselected] = useState("Add Product");

  const content = {
    "Add Product":  <Addproductcomp />,
    "Add Category": <Addcategoriescomp />,
    "Add User": <Addusercomp />,
  }

  return (
    <div className='flex ml-5 mr-5 mt-5'>

      <div className='w-[20%] bg-blue-100 space-y-3 rounded-2xl h-[300px]'>
        {Dashboardmenu?.map((items) => {
          return (
            <div
              onClick={() => setselected(items?.name)}
              className={`${selected === items?.name ? "bg-blue-200 w-full" : ""} flex transition-all  items-center gap-10 text-[20px] p-3`}>

              <h1 className='bg-gray-100 p-2 rounded-lg'>{items?.icon}</h1>
              <h1>{items?.name}</h1>
            </div>
          )
        })}
      </div>
      <div className='w-[80%] ml-5 bg-gray-100 rounded-2xl p-5'>
        {content[selected]}
      </div>
    </div>
  )
}

export default Servicescomp

