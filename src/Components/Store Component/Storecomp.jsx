import React, { useState } from 'react'
import { Dashboardmenu } from '../../Utlis/Dashboardpage'
import Addproductcomp from '../Dashboard Component/Addproductcomp'
import Addcategoriescomp from '../Dashboard Component/Addcategoriescomp'
import Addusercomp from '../Dashboard Component/Addusercomp'

const Storecomp = () => {
  const [selected, setselected] = useState("Add Product")

  const content = {
    "Add Product": <Addproductcomp />,
    "Add Category": <Addcategoriescomp />,
    "Add User": <Addusercomp />
  }

  return (
    <div className='flex ml-5 mt-5 mr-5'>
      <div className='bg-blue-50 w-[20%] h-full rounded-2xl space-y-5 '>
        {Dashboardmenu?.map((sidebar) => {
          return (
            <div
              className={`${selected === sidebar?.name ? "bg-blue-100 rounded-2xl" : ""} flex  items-center gap-6 p-2 cursor-pointer`}
              onClick={() => setselected(sidebar?.name)}
              key={sidebar?.id}>
              <h1 className='bg-gray-100 p-2 rounded-md'>{sidebar?.icon}</h1>
              <h1>{sidebar?.name}</h1>
            </div>
          )
        })}

      </div>
      <div className='flex bg-gray-100 p-2 ml-5 w-[80%] rounded-2xl h-full'>
        {content[selected]}
      </div>
    </div>
  )
}

export default Storecomp
