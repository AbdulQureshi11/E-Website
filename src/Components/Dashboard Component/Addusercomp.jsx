import React from 'react'
import Inputfied from '../Common/Inputfied'
import { ErrorMessage, Form, Formik } from 'formik'
import PrimaryBtn from '../Common/PrimaryBtn'
import * as Yup from "yup";


const Addusercomp = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    image: '',
    role: '',
    description: '',
  }

  const handleSubmit = (values) => {
    console.log('Form submitted:', values)
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('This Field Required*'),
    email: Yup.string()
      .required('This Field Required*'),
    password: Yup.string()
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
            <Form className='space-y-4'>
              <div>
                <Inputfied
                  label='Add User'
                  type='text'
                  id='name'
                  name='name'
                  value={values.name}
                  onChange={(e) => setFieldValue('name', e.target.value)}
                  className='border border-gray-300'
                  placeholder='Enter your name'
                />
                <ErrorMessage name="name" component='div' className='font-semibold text-red-800' />
              </div>

              <div>
                <Inputfied
                  label='Email'
                  type='email'
                  id='email'
                  name='email'
                  value={values.email}
                  onChange={(e) => setFieldValue('email', e.target.value)}
                  className='border border-gray-300'
                  placeholder='Enter your email'
                />
                <ErrorMessage name="email" component='div' className='font-semibold text-red-800' />
              </div>

              <div>
                <Inputfied
                  label='Password'
                  type='password'
                  id='password'
                  name='password'
                  value={values.password}
                  onChange={(e) => setFieldValue('password', e.target.value)}
                  className='border border-gray-300'
                  placeholder='Enter your password'
                />
                <ErrorMessage name="password" component='div' className='font-semibold text-red-800' />
              </div>

              <div>
                <Inputfied
                  type='file'
                  id='image'
                  name='image'
                  onChange={(e) => setFieldValue('image', e.target.files[0])}
                  className='border border-gray-300'
                />
              </div>

              <div>
                <select
                  id='role'
                  name='role'
                  value={values.role}
                  onChange={(e) => setFieldValue('role', e.target.value)}
                  className='border border-gray-300 p-2 rounded-md w-[300px]'
                >
                  <option value="" label="Select Role" />
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="superadmin">Super Admin</option>
                  <option value="superuser">Super User</option>
                  <option value="editor">Editor</option>
                </select>
              </div>

              <div>
                <textarea
                  rows={4}
                  cols={50}
                  id='description'
                  name='description'
                  value={values.description}
                  onChange={(e) => setFieldValue('description', e.target.value)}
                  className='border border-gray-300 p-2 rounded-md w-[300px]'
                />
              </div>

              <div>
                <PrimaryBtn
                  className='rounded-md w-[100px] p-2 text-white  bg-green-600 hover:bg-green-500 transition-all'>
                  Add User
                </PrimaryBtn>
              </div>
            </Form>
          )
        }}
      </Formik>


    </div>
  )
}

export default Addusercomp
