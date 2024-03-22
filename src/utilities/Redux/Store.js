import { configureStore } from '@reduxjs/toolkit'
import LoadingReducer from './loadingSlice'
import UserReducer from './userSlice'
export default configureStore({
  reducer: {
    loader:LoadingReducer,
    user:UserReducer
  }
})

