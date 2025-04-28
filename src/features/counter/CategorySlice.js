import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseURL } from '../../Utlis/BaseURl'

const initialState = {
    category: [],
    lodding: false,
    error: null,
}

export const asyncGetCategories = createAsyncThunk(
    "asyncGetCategories/get",
    async () => {
        try {
            const response = await axios.get(`${baseURL}/api/Categories`);
            //console.log("Response", response);
            return await response.data;
        } catch (error) {
            console.log(error)
        }
    }
)

export const categorySlice = createSlice({
    name: 'Category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(asyncGetCategories.pending, (state) => {
            state.lodding = true;
            state.error = false;
        });
        builder.addCase(asyncGetCategories.fulfilled, (state, action) => {
            state.lodding = false;
            state.category = action.payload;
        });
        builder.addCase(asyncGetCategories.rejected, (state, action) => {
            state.lodding = false;
            state.error = action.payload;
        });
    }
})

export default categorySlice.reducer;