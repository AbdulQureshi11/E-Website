import React, { useEffect } from 'react'
import * as Yup from "yup";
import Inputfied from '../Common/Inputfied'
import { Formik, Form, ErrorMessage } from 'formik'
import PrimaryBtn from '../Common/PrimaryBtn';
import { useDispatch, useSelector } from 'react-redux'
import { asyncAllCategory, asyncCreateCategory, asyncGetSingleCategory, asyncUpdateCategory, asyncUpdateCategoryNull } from '../../features/counter/CategorySlice';

const Addcategoriescomp = () => {

  const dispatch = useDispatch()
  const { category, singleCategory } = useSelector((state) => state?.category)
  //console.log('category', category)
  console.log('singleCategory', singleCategory)

  useEffect(() => {
    dispatch(asyncAllCategory())
  }, [dispatch])

  const initialValues = {
    Categoryname: singleCategory?.Categoryname || ''
  }
  const handleSubmit = (values, { resetForm }) => {
    if (singleCategory) {
      dispatch(asyncUpdateCategory({ id: singleCategory?.id, values }))
      dispatch(asyncUpdateCategoryNull())
    }
    else {
      dispatch(asyncCreateCategory(values))
      resetForm()
    }
  }

  const validationSchema = Yup.object().shape({
    Categoryname: Yup.string()
      .required('This Field is Required'),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize={true}
        validationSchema={validationSchema}
      >
        {({ values, setFieldValue }) => {
          return (
            <Form
              className='space-y-10'
            >
              <div>
                <Inputfied
                  name='Categoryname'
                  type='text'
                  id='Categoryname'
                  value={values.Categoryname}
                  onChange={(e) => setFieldValue('Categoryname', e.target.value)}
                  placeholder='Enter Category Name Here'
                />
                <ErrorMessage name="Categoryname" component='div' className='font-semibold text-red-700' />
              </div>

              <div>
                <PrimaryBtn
                  type='submit'
                  className='text-[18px] font font-semibold bg-green-700 text-white px-5 py-2  rounded-lg '
                >{singleCategory ? 'Update' : 'Save'}</PrimaryBtn>
              </div>
              <div>
                <table className='border w-full border-black'>
                  <thead className='border border-black'>
                    <tr className='border border-black'>
                      <th className='border border-black'>Id</th>
                      <th className='border border-black'>CategoryName</th>
                      <th className='border border-black'>Action Butons</th>
                    </tr>
                  </thead >
                  <tbody className='border border-black'>
                    {
                      category?.map((items, index) => {
                        return (
                          <tr
                            key={index}
                            className='border border-black'>
                            <td className='border border-black font-semibold p-2'>{items?.id}</td>
                            <td className='border border-black p-2'>{items?.Categoryname}</td>
                            <td className=' p-2 flex justify-evenly'>
                              <button
                                onClick={() => dispatch(asyncGetSingleCategory(items?.id))}
                                className='bg-blue-800 text-white px-4 py-2 rounded-lg'>Update</button>
                              <button className='bg-red-800 text-white px-4 py-2 rounded-lg'>Delete</button>
                            </td>
                          </tr>
                        )
                      })
                    }

                  </tbody>
                </table>
              </div>
            </Form>
          )

        }}
      </Formik>


    </div>
  )
}

export default Addcategoriescomp
