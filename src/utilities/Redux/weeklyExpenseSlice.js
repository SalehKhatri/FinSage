/* eslint-disable no-unused-vars */
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const fetchUserWeeklyExpense=createAsyncThunk('fetchUserWeeklyExpense',async ()=>{
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/transaction/weeklyExpense`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('auth-token')
        },
      });
      return res.json();
})

export const weeklyExpenseSlice = createSlice({
  name:'weeklyExpense',
  initialState:{
    isLoading:false,
    user:null,
    isError:false,
  },


  reducers:{
    setWeeklyExpense:(state,action)=>void (state.user=action.payload)
  },

  extraReducers:(builder)=>{

    builder.addCase(fetchUserWeeklyExpense.pending,(state,action)=>{
      state.isLoading=true
    })

    builder.addCase(fetchUserWeeklyExpense.rejected,(state,action)=>{
      console.log("Error",action.payload);
      state.isError=true
    })

    builder.addCase(fetchUserWeeklyExpense.fulfilled,(state,action)=>{
      state.isLoading=false,
      state.user=action.payload
    })
  }
})

export const {setWeeklyExpense}=weeklyExpenseSlice.actions
export const userWeeklyExpense=(state)=>state.weeklyExpense
export default weeklyExpenseSlice.reducer