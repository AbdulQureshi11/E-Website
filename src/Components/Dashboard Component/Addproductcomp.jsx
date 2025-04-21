import React from 'react'
import Inputfied from '../Common/Inputfied'
import PrimaryBtn from '../Common/PrimaryBtn'

const Addproductcomp = () => {
    return (
        <div className='space-y-5'>

            <div>
                <Inputfied
                    label="Product Name"
                    id="Product Name"
                    type="text"
                    placeholder="Enter Product Name"
                    name="Product Name"
                    value=""
                    //onChange = {}
                    className=""
                />
            </div>

            <div>
                <Inputfied
                    label="Prodcut Title"
                    id="Title"
                    type="text"
                    placeholder="Enter Product Title"
                    name="Title"
                    value=""
                    //onChange = {}
                    className=""
                />
            </div>

            <div>
                <PrimaryBtn className="bg-green-600 hover:bg-green-500 transition-all font-semibold text-white p-2 flex justify-center items-center w-[100px] rounded-md"> Save </PrimaryBtn>
            </div>

        </div>
    )
}

export default Addproductcomp
