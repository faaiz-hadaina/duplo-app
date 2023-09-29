import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_GET_ONE_ORDER } from "../../../config/api";
import { toast } from "react-toastify";
import { Client } from "../../../helpers/client";

export const getOneOrder = createAsyncThunk(
  "orders/getOne",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await Client({
        method: "GET",
        path: API_GET_ONE_ORDER.replace("{:id}", id),
      });

      return response.data;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);
