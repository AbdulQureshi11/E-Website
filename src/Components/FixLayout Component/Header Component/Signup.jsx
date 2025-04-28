import React from 'react'
import picture from '../../../Pictures/Domore.jpg'
import welcome from '../../../Pictures/Welcome.png'
import { Formik, Form, ErrorMessage } from 'formik'
import Inputfied from '../../Common/Inputfied'
import PrimaryBtn from '../../Common/PrimaryBtn'
import * as Yup from "yup";
import { Link } from 'react-router-dom'
import { RiFacebookCircleFill } from 'react-icons/ri'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'


const Signup = () => {
  const initialValues = {
    Email: "",
    Password: "",
    confirmpassword: "",
  }
  const handleSubmit = (values) => {
    console.log("Values", values)
  }
  const validationSchema = Yup.object().shape({
    Email: Yup.string()
      .required('Required'),
    Password: Yup.string()
      .required('Required'),
    confirmpassword: Yup.string()
      .required('Required'),
  });

  return (
    <div className='flex justify-center absolute w-[100%]'>
      <div>
        <img src={picture} alt="" />
      </div>
      <div className='bg-black absolute w-[100%] h-[100%] opacity-80'></div>

      <div className='flex absolute w-[950px] h-[653px] rounded-3xl mt-10'>
        <div className='w-[66%]'>
          <img src={welcome} alt="" className='rounded-l-3xl' />
        </div>

        <div className='w-[34%] h-[100] rounded-r-3xl p-5 bg-white bg-opacity-90'>
          <h1 className='text-blue-500 font-bold text-[25px]'>Create New Account</h1>
          <p className='font-semibold'>Welcome to Meta-x Please create your account</p>

          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ setFieldValue, values }) => {
              return (
                <Form
                  className='mt-5 space-y-3'
                >
                  <div>
                    <Inputfied
                      name='Email'
                      id='Email'
                      values={values.Email}
                      type='email'
                      onChange={(e) => setFieldValue("Email", e.target.value)}
                      placeholder='Enter Email Here'
                      className='w-full'
                    />
                    <ErrorMessage name="Email" component='div' className='font-semibold text-red-800' />

                  </div>
                  <div>
                    <Inputfied
                      name='Password'
                      id='Password'
                      values={values.Password}
                      type='password'
                      onChange={(e) => setFieldValue("Password", e.target.value)}
                      placeholder='New Password'
                      className='w-full'
                    />
                    <ErrorMessage name="Password" component='div' className='font-semibold text-red-800' />
                  </div>

                  <div>
                    <Inputfied
                      name='confirmpassword'
                      id='confirmpassword'
                      values={values.confirmpassword}
                      type='password'
                      onChange={(e) => setFieldValue("confirmpassword", e.target.value)}
                      placeholder='Confirm Password'
                      className='w-full'
                    />
                    <ErrorMessage name="confirmpassword" component='div' className='font-semibold text-red-800' />
                  </div>
                  <div>
                    <PrimaryBtn
                      type='submit'
                      className='w-full bg-blue-500 text-white p-1 rounded-2xl'
                    >
                      Create Account
                    </PrimaryBtn>
                  </div>
                  <div className='flex justify-center'>
                    <h1>or</h1>
                  </div>
                  <div>
                    <Link
                      to="/Loignfacebook"
                      className='flex gap-3 items-center justify-center font-semibold w-[full] bg-[#2863AD] p-2 text-white rounded-3xl'>
                      <h1><RiFacebookCircleFill className='text-[20px]' /></h1>
                      <h1>Login With Facebook</h1>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/Logingoogle"
                      className='flex items-center justify-center gap-5 font-semibold  w-[full] hover:bg-white hover:text-black border-2 border-white  p-2 text-gray-800 rounded-3xl'>
                      <h1><FcGoogle className='text-[20px]' /></h1>
                      <h1>Login With Google</h1>
                    </Link>
                  </div>

                  <div>
                    <Link
                      to="/Loginapple"
                      className='flex items-center justify-center gap-5 font-semibold  w-[full] hover:bg-white hover:text-black border-2 border-white  p-2 text-gray-800 rounded-3xl'>
                      <h1><FaApple className='text-[20px]' /></h1>
                      <h1>Login With Apple</h1>
                    </Link>
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
