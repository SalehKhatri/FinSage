import { createSlice } from '@reduxjs/toolkit'

export const loadingSlice = createSlice({
  name:'loader',
  initialState:{
    loader:0
  },

  reducers:{
    setLoader:(state,action)=>{state.loader=action.payload}
  }
})

export const {setLoader}=loadingSlice.actions
export const loader=(state)=>state.loader.loader
export default loadingSlice.reducer