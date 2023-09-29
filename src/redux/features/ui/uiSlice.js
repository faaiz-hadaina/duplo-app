import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loading: false,
    error: null,
    pending: false,
    success: false,
    modalText: "",
    isModalOpened: false,
  },

  reducers: {
    showModal: (state, action) => {
      state.isModalOpened = true;
      state.modal = action.payload;
    },
    closeModal: (state, action) => {
      state.isModalOpened = false;
      state.modal = null;
    },
  },
});

export const { showModal, closeModal } = uiSlice.actions;
export default uiSlice.reducer;
