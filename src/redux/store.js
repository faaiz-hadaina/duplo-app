import { configureStore } from "@reduxjs/toolkit";
import businessSlice from "./features/business/businessSlice";
import uiSlice from "./features/ui/uiSlice";
import ordersSlice from "./features/orders/ordersSlice";

export const store = configureStore({
  reducer: {
    business: businessSlice,
    orders: ordersSlice,
    ui: uiSlice,
  },
});
