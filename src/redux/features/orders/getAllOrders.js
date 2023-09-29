import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_GET_ALL_ORDERS, API_GET_BUSINESSES } from "../../../config/api";
import { toast } from "react-toastify";
import { Client } from "../../../helpers/client";

export const getAllOrders = createAsyncThunk(
  "orders/getAll",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await Client({
        method: "GET",
        path: API_GET_ALL_ORDERS,
      });

      return response.data;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);
