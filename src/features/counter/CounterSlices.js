import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {baseURL} from '../../Utlis/BaseURl.js'
import axios from 'axios'

const initialState = {
  category: [],
  lodding: false,
  error: false,
}
export const asyncGetCategories = createAsyncThunk(
    "asyncgetcategories/get", 
    async () => {
        try {
            const response = await axios.get(`${baseURL} /api/Category`)
            console.log("Response", response)
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


export default counterSlice.reducer