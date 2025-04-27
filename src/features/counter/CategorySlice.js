import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    Category: 0,
}

export const asyncGetCategory = createAsyncThunk(
    "asyncGetCategory/get",
    async () => {
        try {
            const response = await axios.get("URL here")
            return await response.data.data;
        } catch (error) {
            console.log(error)
        }
    }
)


export const counterSlice = createSlice({
    name: 'Category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
});


export default counterSlice.reducer