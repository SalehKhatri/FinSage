/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategoryWiseExpense = createAsyncThunk(
  "fetchCategoryWiseExpense",
  async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/transaction/categoryWiseExpense`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
      }
    );
    return res.json();
  }
);

export const categoryWiseExpenseSlice = createSlice({
  name: "categoryWiseExpense",
  initialState: {
    isLoading: false,
    user: null,
    isError: false,
  },

  reducers: {
    setCategoryWiseExpense: (state, action) =>
      void (state.user = action.payload),
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCategoryWiseExpense.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchCategoryWiseExpense.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });

    builder.addCase(fetchCategoryWiseExpense.fulfilled, (state, action) => {
      (state.isLoading = false), (state.user = action.payload);
    });
  },
});

export const { setCategoryWiseExpense } = categoryWiseExpenseSlice.actions;
export const userCategoryWiseExpense = (state) => state.categoryWiseExpense;
export default categoryWiseExpenseSlice.reducer;
