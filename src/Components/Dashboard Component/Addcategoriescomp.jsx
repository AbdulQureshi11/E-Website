import React from 'react'
import Inputfied from '../Common/Inputfied'
import { ErrorMessage, Form, Formik } from 'formik'
import * as Yup from "yup";
import PrimaryBtn from '../Common/PrimaryBtn';

const Addcategoriescomp = () => {
  const initialValues = {
    Category: "",
    discription: "",
    image: '',
    Categories: "Select Category",
  }

  const handleSubmit = (values) => {
    console.log("values", values);
  }

  const validationSchema = Yup.object().shape({
    Category: Yup.string()
      .required('This Field Required*'),
    discription: Yup.string()
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
                <Inputfied
                  type='file'
                  name='image'
                  id='image'
                  placeholder='Enter Category Image'
                  onChange={(e) => setFieldValue("image", e.target.files[0])}
                  className=''
                />
              </div>

              <div>
                <select
                  name="Categories"
                  id="Categories"
                  value={values.Categories}
                  onChange={(e) => setFieldValue("Categories", e.target.value)}
                  className='flex items-center justify-center border-2 border-gray-300 rounded-md p-2'
                >
                  <option value="Select Category">Select Category</option>
                  <option value="Category 1">Category 1</option>
                  <option value="Category 2">Category 2</option>
                  <option value="Category 3">Category 3</option>
                </select>
              </div>

              <div>
                <textarea
                  name="discription"
                  id="discription"
                  value={values.discription}
                  onChange={(e) => setFieldValue("discription", e.target.value)}
                  rows={12}
                  cols={36}
                  className='outline-none rounded-md p-2'
                />
                <ErrorMessage name="discription" component="div" className='font-semibold text-red-800' />
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
