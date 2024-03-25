/* eslint-disable no-unused-vars */
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const fetchAllIncomes=createAsyncThunk('fetchAllIncomes',async ()=>{
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/transaction/getTransaction/income`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('auth-token')
        },
      });
      return res.json();
})

export const allIncomesSlice = createSlice({
  name:'allIncomes',
  initialState:{
    isLoading:false,
    allIncomes:null,
    isError:false,
  },


  reducers:{
    setAllIncomes:(state,action)=>void (state.user=action.payload)
  },

  extraReducers:(builder)=>{

    builder.addCase(fetchAllIncomes.pending,(state,action)=>{
      state.isLoading=true
    })

    builder.addCase(fetchAllIncomes.rejected,(state,action)=>{
      console.log("Error",action.payload);
      state.isError=true
    })

    builder.addCase(fetchAllIncomes.fulfilled,(state,action)=>{
      state.isLoading=false,
      state.allIncomes=action.payload
    })
  }
})

export const {setAllIncomes}=allIncomesSlice.actions
export const allIncomes=(state)=>state.allIncomes
export default allIncomesSlice.reducer