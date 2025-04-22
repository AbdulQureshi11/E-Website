import React from 'react'
import Inputfied from '../Common/Inputfied'
import { ErrorMessage, Form, Formik } from 'formik'
import * as Yup from "yup";
import PrimaryBtn from '../Common/PrimaryBtn';

const Addcategoriescomp = () => {
  const initialValues = {
    Category: "",
  }

  const handleSubmit = (values) => {
    console.log("values", values);
  }

  const validationSchema = Yup.object().shape({
    Category: Yup.string()
      .required('This Field Required*'),
  });

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
                  label='Category Name'
                  type='text'
                  name='Category'
                  id='Category'
                  placeholder='Enter Category Name'
                  value={values.Category}
                  onChange={(e) => setFieldValue("Category", e.target.value)}
                  className=''
                />
                <ErrorMessage name="Category" component="div" className='font-semibold text-red-800' />
              </div>

              <div>
                <PrimaryBtn
                  className='bg-blue-800 font-semibold rounded-md text-white p-2 w-[100px]'
                  type='submit'>
                  Submit
                </PrimaryBtn>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default Addcategoriescomp
