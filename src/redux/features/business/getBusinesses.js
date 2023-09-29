import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_GET_BUSINESSES } from "../../../config/api";
import { toast } from "react-toastify";
import { Client } from "../../../helpers/client";

export const getBusinesses = createAsyncThunk(
  "business/getAll",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await Client({
        method: "GET",
        path: API_GET_BUSINESSES,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
