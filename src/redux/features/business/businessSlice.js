import { createSlice } from "@reduxjs/toolkit";
import { getBusinesses } from "./getBusinesses";

export const businessSlice = createSlice({
  name: "business",
  initialState: { loading: false, error: false, businesses: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBusinesses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBusinesses.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.businesses = action.payload;
      })
      .addCase(getBusinesses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default businessSlice.reducer;
