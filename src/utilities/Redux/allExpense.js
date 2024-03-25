/* eslint-disable no-unused-vars */
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const fetchAllExpenses=createAsyncThunk('fetchAllExpenses',async ()=>{
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/transaction/getTransaction/expense`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('auth-token')
        },
      });
      return res.json();
})

export const allExpenseSlice = createSlice({
  name:'allExpenses',
  initialState:{
    isLoading:false,
    allExpenses:null,
    isError:false,
  },


  reducers:{
    setAllExpenses:(state,action)=>void (state.user=action.payload)
  },

  extraReducers:(builder)=>{

    builder.addCase(fetchAllExpenses.pending,(state,action)=>{
      state.isLoading=true
    })

    builder.addCase(fetchAllExpenses.rejected,(state,action)=>{
      console.log("Error",action.payload);
      state.isError=true
    })

    builder.addCase(fetchAllExpenses.fulfilled,(state,action)=>{
      state.isLoading=false,
      state.allExpenses=action.payload
    })
  }
})

export const {setAllExpenses}=allExpenseSlice.actions
export const allExpenses=(state)=>state.allExpenses
export default allExpenseSlice.reducer