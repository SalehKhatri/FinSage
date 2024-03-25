/* eslint-disable no-unused-vars */
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const fetchUserTotalBalance=createAsyncThunk('fetchUserTotalBalance',async ()=>{
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/transaction/balance`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('auth-token')
        },
      });
      return res.json();
})

export const totalBalanceSlice = createSlice({
  name:'totalBalance',
  initialState:{
    isLoading:false,
    user:null,
    isError:false,
  },


  reducers:{
    setTotalBalance:(state,action)=>void (state.user=action.payload)
  },

  extraReducers:(builder)=>{

    builder.addCase(fetchUserTotalBalance.pending,(state,action)=>{
      state.isLoading=true
    })

    builder.addCase(fetchUserTotalBalance.rejected,(state,action)=>{
      console.log("Error",action.payload);
      state.isError=true
    })

    builder.addCase(fetchUserTotalBalance.fulfilled,(state,action)=>{
      state.isLoading=false,
      state.user=action.payload
    })
  }
})

export const {setTotalBalance}=totalBalanceSlice.actions
export const userTotalBalance=(state)=>state.totalBalance
export default totalBalanceSlice.reducer