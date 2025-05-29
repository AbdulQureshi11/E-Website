import React, { useEffect } from 'react'
import Inputfied from '../Common/Inputfied'
import PrimaryBtn from '../Common/PrimaryBtn'
import { ErrorMessage, Form, Formik } from 'formik'
import * as Yup from "yup";
import { asyncAllCategory } from '../../features/counter/CategorySlice';
import { useDispatch, useSelector } from 'react-redux';
import { asyncCreateProduct } from '../../features/counter/ProductSlice';

const Addproductcomp = () => {

    const dispatch = useDispatch()
    const { category } = useSelector((state) => state?.category)

    useEffect(() => {
        dispatch(asyncAllCategory())
    }, [dispatch])

    const initialValues = {
        Name: '',
        Title: '',
        Stock: '',
        Price: '',
        Discount: '',
        Image: '',
        Items: '',
        discription: '',
    }

    const validationSchema = Yup.object().shape({
        Name: Yup.string()
            .required('This Field is Required*'),
        Title: Yup.string()
            .required('This Field is Required*'),
        Stock: Yup.number()
            .required('This Field is Required*'),
        Price: Yup.number()
            .required('This Field is Required*'),
        Discount: Yup.number()
            .required('This Field is Required*'),
    });

    const handleSubmit = (values) => {

        let formData = new FormData();
        formData.append('Name', values?.Name);
        formData.append('Title', values?.Title);
        formData.append('Stock', values?.Stock);
        formData.append('Price', values?.Price);
        formData.append('Discount', values?.Discount);
        formData.append('Image', values?.Image);
        formData.append('Items', values?.Items);
        formData.append('discription', values?.discription);

        dispatch(asyncCreateProduct(formData))

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
                                <Inputfied
                                    label="Prodcut Stock"
                                    id="Stock"
                                    type="number"
                                    placeholder="Enter Product Stock"
                                    name="Stock"
                                    value={values.Stock}
                                    onChange={(e) => setFieldValue("Stock", e.target.value)}
                                    className=""
                                />
                                <ErrorMessage name="Stock" component='div' className='font-semibold text-red-700' />
                            </div>

                            <div>
                                <Inputfied
                                    label="Prodcut Price"
                                    id="Price"
                                    type="number"
                                    placeholder="Enter Product Price"
                                    name="Price"
                                    value={values.Price}
                                    onChange={(e) => setFieldValue("Price", e.target.value)}
                                    className=""
                                />
                                <ErrorMessage name="Price" component='div' className='font-semibold text-red-700' />
                            </div>

                            <div>
                                <Inputfied
                                    label="Prodcut Discount"
                                    id="Discount"
                                    type="number"
                                    placeholder="Enter Product Discount"
                                    name="Discount"
                                    value={values.Discount}
                                    onChange={(e) => setFieldValue("Discount", e.target.value)}
                                    className=""
                                />
                                <ErrorMessage name="Discount" component='div' className='font-semibold text-red-700' />
                            </div>

                            <div>
                                <Inputfied
                                    label="Prodcut Image"
                                    id="Image"
                                    type="file"
                                    placeholder="Enter Product Image"
                                    name="Image"
                                    onChange={(e) => setFieldValue("Image", e.target.files[0])}
                                    className=""
                                />
                                <ErrorMessage name="Image" component='div' className='font-semibold text-red-700' />
                            </div>

                            <div>
                                <select
                                    label="Items"
                                    id="Items"
                                    type="select"
                                    placeholder="Enter Product Items"
                                    name="Items"
                                    value={values.Items}
                                    onChange={(e) => setFieldValue("Items", e.target.value)}
                                    className="outline-none w-[300px] rounded-md p-[8px]"
                                >
                                    <option value="">Select Item</option>

                                    {
                                        category?.map((menu, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={menu?.Categoryname}
                                                >
                                                    {menu?.Categoryname}
                                                </option>
                                            )
                                        })
                                    }

                                </select>
                            </div>

                            <div>
                                <textarea
                                    rows={10}
                                    cols={50}
                                    id="discription"
                                    type="text"
                                    placeholder="Enter Product discription"
                                    name="discription"
                                    value={values.discription}
                                    onChange={(e) => setFieldValue("discription", e.target.value)}
                                    className="outline-none rounded-md p-2"
                                />
                            </div>

                            <div>
                                <PrimaryBtn
                                    type='submit'
                                    className="bg-green-600 hover:bg-green-500 transition-all font-semibold text-white p-2 flex justify-center items-center w-[100px] rounded-md"> Save </PrimaryBtn>
                            </div>

                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default Addproductcomp
