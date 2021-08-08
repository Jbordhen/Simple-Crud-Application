import { configureStore } from '@reduxjs/toolkit'
import postReducer from './features/postsSlice'

export const store = configureStore({
  reducer: { post: postReducer }
})
