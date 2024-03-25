/* eslint-disable no-unused-vars */
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const fetchUserBudget=createAsyncThunk('fetchUserBudget',async ()=>{
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/budget/getBudget`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('auth-token')
        },
      });
      return res.json();
})

export const budgetSlice = createSlice({
  name:'budget',
  initialState:{
    isLoading:false,
    user:null,
    isError:false,
  },


  reducers:{
    setBudget:(state,action)=>void (state.user=action.payload)
  },

  extraReducers:(builder)=>{

    builder.addCase(fetchUserBudget.pending,(state,action)=>{
      state.isLoading=true
    })

    builder.addCase(fetchUserBudget.rejected,(state,action)=>{
      console.log("Error",action.payload);
      state.isError=true
    })

    builder.addCase(fetchUserBudget.fulfilled,(state,action)=>{
      state.isLoading=false,
      state.user=action.payload
    })
  }
})

export const {setBudget}=budgetSlice.actions
export const budget=(state)=>state.budget
export default budgetSlice.reducer