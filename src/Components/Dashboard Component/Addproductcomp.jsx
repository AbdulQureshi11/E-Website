import React from 'react'
import Inputfied from '../Common/Inputfied'
import PrimaryBtn from '../Common/PrimaryBtn'
import { ErrorMessage, Form, Formik } from 'formik'
import * as Yup from "yup";

const Addproductcomp = () => {
    const initialValues = {
        Name: "",
        Title: "",
    }

    const validationSchema = Yup.object().shape({
        Name: Yup.string()
            .required('This Field is Required*'),
        Title: Yup.string()
            .required('This Field is Required*'),
    });

    const handleSubmit = (values) => {
        console.log("values", values);
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {({ values, setFieldValue }) => {
                    return (
                        <Form className='space-y-5'>
                            <div>
                                <Inputfied
                                    label="Product Name"
                                    id="Name"
                                    type="text"
                                    placeholder="Enter Product Name"
                                    name="Name"
                                    value={values.Name}
                                    onChange={(e) => setFieldValue("Name", e.target.value)}
                                    className=""
                                />
                                <ErrorMessage name="Name" component='div' className='font-semibold text-red-700' />
                            </div>

                            <div>
                                <Inputfied
                                    label="Prodcut Title"
                                    id="Title"
                                    type="text"
                                    placeholder="Enter Product Title"
                                    name="Title"
                                    value={values.Title}
                                    onChange={(e) => setFieldValue("Title", e.target.value)}
                                    className=""
                                />
                                <ErrorMessage name="Title" component='div' className='font-semibold text-red-700' />
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
