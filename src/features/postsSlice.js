import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  try {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    return data
  } catch (error) {
    return error.response && error.response.data.errors
      ? error.response.data.errors
      : error.message
  }
})

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (formData, { dispatch, getState }) => {
    try {
      const { data } = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        { ...formData }
      )
      // console.log(data)
      return data
    } catch (error) {
      return error.response && error.response.data.errors
        ? error.response.data.errors
        : error.message
    }
  }
)

export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    // console.log(id)
    return id
  } catch (error) {
    return error.response && error.response.data.errors
      ? error.response.data.errors
      : error.message
  }
})

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    status: null
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [getPosts.rejected]: (state, { payload }) => {
      state.status = 'failed'
      state.error = payload
    },
    [createPost.pending]: (state, action) => {
      state.status = 'loading'
    },
    [createPost.fulfilled]: (state, { payload }) => {
      state.list.push(payload)
      state.status = 'success'
    },
    [createPost.rejected]: (state, { payload }) => {
      state.status = 'failed'
      state.error = payload
    },
    [deletePost.pending]: (state, action) => {
      state.status = 'loading'
    },
    [deletePost.fulfilled]: (state, { payload }) => {
      // return list.filter(({ id }) => id !== payload)
      state.list = state.list.filter((item) => item.id !== payload)
      state.status = 'success'   
    },
    [deletePost.rejected]: (state, { payload }) => {
      state.status = 'failed'
      state.error = payload
    }
  }
})

export default postsSlice.reducer
