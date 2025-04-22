import React from 'react'
import picture from '../../../Pictures/Domore.jpg'
import Inputfied from '../../Common/Inputfied'
import { Formik, Form, ErrorMessage } from 'formik'
import * as Yup from "yup";
import PrimaryBtn from '../../Common/PrimaryBtn';
import { Link } from 'react-router-dom';
import { RiFacebookCircleFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  }
  const handleSubmit = (values) => {
    console.log(values, "This is Login Page")
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('This field is Required*'),
    password: Yup.string()
      .required('This field is Required*'),
  });

  return (
    <div className='flex justify-center absolute w-[100%]'>
      <div>
        <img src={picture} alt="" />
      </div>
      <div className='bg-black absolute w-[100%] h-[100%] opacity-80'></div>

      <div className='absolute p-4 bg-white  mt-[130px] w-[370px] rounded-2xl bg-opacity-75'>
        <h1 className='font-semibold text-blue-600 text-[25px]'>Welcome to Meta-X</h1>
        <h1 className='font-semibold text-[18px]'>Please Login Here!</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => {
            return (
              <Form className='mt-5 space-y-3'>
                <div className=''>
                  <Inputfied
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Enter Your Email'
                    value={values.email}
                    onChange={(e) => setFieldValue("email", e.target.value)}
                    className=' rounded-md p-2 w-full border-2  border-gray-300'
                  />
                  <ErrorMessage name="email" component='div' className='font-semibold text-red-700' />
                </div>

                <div>
                  <Inputfied
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Enter Your Password'
                    value={values.password}
                    onChange={(e) => setFieldValue("password", e.target.value)}
                    className='rounded-md p-2 border-2 border-gray-300 w-full'
                  />
                  <ErrorMessage name="email" component='div' className='font-semibold text-red-700' />
                </div>

                <div>
                  <PrimaryBtn
                    type='submit'
                    className='bg-blue-500 w-full flex justify-center mt-5 items-center p-2 rounded-3xl text-white'
                  >Login</PrimaryBtn>
                </div>
                <div>
                  <h1 className=' flex justify-center items-center font-semibold'>or</h1>
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
  )
}

export default Login
