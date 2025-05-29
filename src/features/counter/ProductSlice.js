import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseURL } from '../../Utlis/BaseURl'

const initialState = {
    product: [],
    lodding: false,
    error: null,
}

// Create Product Here
export const asyncCreateProduct = createAsyncThunk(
    'asyncCreateProduct/post',
    async (formData) => {
        try {
            const response = await axios.post(`${baseURL}/api/CreateProduct`, 
                formData,
                {
                    headers: {
                        'Content-Type': 'multi-part/form-data'
                    }
                }
            )
            return response?.data;
        } catch (error) {
            console.log(error)
        }
    }
);

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
})

export default productSlice.reducer;