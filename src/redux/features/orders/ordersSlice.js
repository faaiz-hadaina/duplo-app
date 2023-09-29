import { createSlice } from "@reduxjs/toolkit";
import { getAllOrders } from "./getAllOrders";
import { getOneOrder } from "./getOneOrder";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: { loading: false, error: false, orders: [], order: null },
  reducers: {
    selectOrderID: (state, action) => {
      state.selectedOrderID = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.orders = [];
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.orders = action.payload;
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.orders = [];
      })
      .addCase(getOneOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.order = null;
      })
      .addCase(getOneOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.order = action.payload;
      })
      .addCase(getOneOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.order = null;
      });
  },
});

export const { selectOrderID } = ordersSlice.actions;

export default ordersSlice.reducer;
