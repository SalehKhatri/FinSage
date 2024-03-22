/* eslint-disable no-unused-vars */
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const fetchUserDetails=createAsyncThunk('fetchUserDetails',async ()=>{
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/user/getuser`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('auth-token')
        },
      });
      return res.json();
})

export const userSlice = createSlice({
  name:'user',
  initialState:{
    isLoading:false,
    user:null,
    isError:false,
  },


  reducers:{
    setUser:(state,action)=>void (state.user=action.payload)
  },

  extraReducers:(builder)=>{

    builder.addCase(fetchUserDetails.pending,(state,action)=>{
      state.isLoading=true
    })

    builder.addCase(fetchUserDetails.rejected,(state,action)=>{
      console.log("Error",action.payload);
      state.isError=true
    })

    builder.addCase(fetchUserDetails.fulfilled,(state,action)=>{
      state.isLoading=false,
      state.user=action.payload
    })
  }
})

export const {setUser}=userSlice.actions
export const user=(state)=>state.user
export default userSlice.reducer