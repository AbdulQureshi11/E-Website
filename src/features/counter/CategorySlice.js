import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: 0,
}

export const asyncGetCategories = createAsyncThunk(
    async () => {
        try {
            const response = await axios.get(`${baseURL}/api/CreateCategory`);
                
        } catch (error) {
            
        }
    }
)

export const counterSlice = createSlice({
  name: 'Category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

  }
})


export default counterSlice.reducer