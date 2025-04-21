import React from 'react'
import Inputfied from '../Common/Inputfied'
import PrimaryBtn from '../Common/PrimaryBtn'
import { Form, Formik } from 'formik'

const Addproductcomp = () => {
    const initialValues = {
        Name: "",
        Title: "",
    }

    const handleSubmit = (values) => {
        console.log("Values");
    }

    return (
        <div className='space-y-5'>

            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            //validationSchema={validationSchema}
            >
                {() => {
                    return (
                        <Form>
                            <div>
                                <Inputfied
                                    label="Product Name"
                                    id="Name"
                                    type="text"
                                    placeholder="Enter Product Name"
                                    name="Name"
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


                        </Form>
                    )
                }}

            </Formik>


        </div>
    )
}

export default Addproductcomp
