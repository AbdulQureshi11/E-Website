import React from 'react'
import picture from '../../../Pictures/Domore.jpg'
import welcome from '../../../Pictures/Welcome.png'
import {Formik, Form} from 'formik'
import Inputfied from '../../Common/Inputfied'

const Signup = () => {
  const initialValues = {

  }
  const handleSubmit = (values) => {
    console.log("Values", values)
  }
  const validationSchema = () => {

  }

  return (
    <div className='flex justify-center absolute w-[100%]'>
      <div>
        <img src={picture} alt="" />
      </div>
      <div className='bg-black absolute w-[100%] h-[100%] opacity-80'></div>

      <div className='flex absolute w-[950px] h-[653px] rounded-3xl mt-10'>
        <div className='w-[66%]'>
          <img src={welcome} alt=""  className='rounded-l-3xl' />
        </div>

        <div className='w-[34%] h-[100] rounded-r-3xl p-5 bg-white bg-opacity-90'>
          <h1 className='text-blue-500 font-bold text-[25px]'>Create New Account</h1>
          <p className='font-semibold'>Welcome to Meta-x Please create your account</p>

          <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          >
            {({setFieldValues, values}) => {
              return(
                <Form
                className='mt-5 space-y-5'
                >
                  <div>
                    <Inputfied
                    name='Email'
                    id='Email'
                    values={values.Email}
                    type='email'
                    onChange={(e) => setFieldValues("Email", e.target.value)}
                    placeholder='Enter Email Here'
                    className='w-full'
                    />
                  </div>
                </Form>
              )
            }}

          </Formik>
        </div>
      </div>

    </div>
  )
}

export default Signup
