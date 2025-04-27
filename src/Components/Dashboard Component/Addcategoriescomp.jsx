import React from 'react'
import Inputfied from '../Common/Inputfied'
import { Formik, Form, ErrorMessage } from 'formik'
import * as Yup from "yup";
import PrimaryBtn from '../Common/PrimaryBtn';

const Addcategoriescomp = () => {


  const initialValues = {
    category: ''
  }
  const handleSubmit = (values) => {
    console.log("Categories", values);
  }
  const validationSchema = Yup.object().shape({
    category: Yup.string()
      .required('This field is required*'),
  });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => {
          return (
            <div>
              <Form
                className='space-y-5'
              >
                <div>
                  <Inputfied
                    label='Category Name'
                    type='text'
                    name='category'
                    id='category'
                    value={values.category}
                    placeholder='Enter Category Name'
                    onChange={(e) => setFieldValue('category', e.target.value)}
                    className='border border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:ring-1'
                  />
                  <ErrorMessage name="category" component='div' className='font-semibold text-red-700' />
                </div>
                <div>
                  <PrimaryBtn
                    type='submit'
                    className='flex w-[100px] bg-green-600 hover:bg-green-500 text-white rounded-md transition-all p-2 justify-center '>
                    Save
                  </PrimaryBtn>
                </div>
              </Form>
              <table className='border border-gray-800 w-full mt-10'>
                <thead className='border border-gray-800'>
                  <th className='border border-gray-800'>Id</th>
                  <th className='border border-gray-800'>Categories</th>
                  <th className='border border-gray-800'>Action Buttons</th>
                </thead>
                <tbody className='border border-gray-800'>
                  <tr className='border border-gray-800'>
                    <td className='border border-gray-800 font-semibold'></td>
                    <td className='border border-gray-800 font-semibold p-2'>Category</td>
                    <td className=' p-2 flex justify-evenly'>
                      <button className='bg-blue-600 px-4 py-1 rounded-md text-white'>Update</button>
                      <button className='bg-red-600 px-4 py-1 rounded-md text-white'>Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )
        }}
      </Formik>
    </div>
  )
}

export default Addcategoriescomp
