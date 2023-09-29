import { configureStore } from "@reduxjs/toolkit";
import businessSlice from "./features/business/businessSlice";
import uiSlice from "./features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    business: businessSlice,
    ui: uiSlice,
  },
});
