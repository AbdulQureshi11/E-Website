import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseURL } from '../../Utlis/BaseURl'

const initialState = {
    category: [],
    singleCategory: null,
    lodding: false,
    error: null,
}

//For All Categories:
export const asyncAllCategory = createAsyncThunk(
    'asyncAllCategory/get',
    async () => {
        try {
            const response = await axios.get(`${baseURL}/api/Categories`)
            //console.log('response', response?.data)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
);

// Create Category Here
export const asyncCreateCategory = createAsyncThunk(
    'asyncCreateCategory/post',
    async (values, {dispatch}) => {
        try {
            const response = await axios.post(`${baseURL}/api/CreateCategory`, values)
            dispatch(asyncAllCategory())
            return response?.data;
        } catch (error) {
            console.log(error)
        }
    }
);

// Get Single Category
export const asyncGetSingleCategory = createAsyncThunk(
    'asyncGetSingleCategory/get',
    async (id) => {
        try {
            const response = await axios.get(`${baseURL}/api/Category/${id}`)
            //console.log('response', response?.data?.data)
            return response?.data?.data;
        } catch (error) {
            console.log(error)
        }
    }
);

// Get Update Category
export const asyncUpdateCategory = createAsyncThunk(
    'asyncUpdateCategory/put',
    async ({id, values}, {dispatch}) => {
        try {
            const response = await axios.put(`${baseURL}/api/UpdateCategory/${id}`, values)
            dispatch(asyncAllCategory())
            //console.log('response', response?.data?.data)
            return response?.data?.data;
        } catch (error) {
            console.log(error)
        }
    }
);

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        asyncUpdateCategoryNull: (state) => {
            state.singleCategory = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(asyncAllCategory.pending, (state) => {
            state.lodding = true
            state.error = false
        });
        builder.addCase(asyncAllCategory.fulfilled, (state, action) => {
            state.lodding = false
            state.category = action.payload
        });
        builder.addCase(asyncAllCategory.rejected, (state, action) => {
            state.lodding = false
            state.error = action.payload
        });

        // Get the Record
        builder.addCase(asyncGetSingleCategory.pending, (state) => {
            state.lodding = true
            state.error = false
        });
        builder.addCase(asyncGetSingleCategory.fulfilled, (state, action) => {
            state.lodding = false
            state.singleCategory = action.payload
        });
        builder.addCase(asyncGetSingleCategory.rejected, (state, action) => {
            state.lodding = false
            state.error = action.payload
        });
    }
})

export const {asyncUpdateCategoryNull} = categorySlice.actions; 

export default categorySlice.reducer