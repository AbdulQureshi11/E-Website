import React, { useState } from 'react'
import { Dashboardmenu } from '../../Utlis/Dashboardpage'

const Dashboardcomp = () => {
  const [selected, setselected] = useState("Add Product");
  
  return (
    <div>
      <div className='flex mr-10 ml-10 mt-3'>

        {/*This is Menu Bar Section*/}
        <div className='w-[20%] h-[100%] space-y-5 bg-blue-100 rounded-md'>
          {Dashboardmenu?.map((items) => {
            return(
              <div
              onClick={() => setselected(items?.name)}
              className={`${selected === items?.name ? "bg-blue-200 font-semibold" : ""} flex items-center  text-[18px] gap-5 p-2 cursor-pointer transition-all`}>
                <h1 className='bg-gray-100 p-3 rounded-md'>{items?.icon}</h1>
                <h1>{items?.name}</h1>

              </div>
            )
          })}

        </div>

        {/*This is From Section*/}
        <div className='w-[80%] h-[100%] bg-gray-100 rounded-md ml-5'>
          
        </div>

      </div>
    </div>
  )
}

export default Dashboardcomp
