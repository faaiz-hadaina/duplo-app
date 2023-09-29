import Axios from "axios";

export const Client = async (params) => {
  const token = localStorage.getItem("accessToken");
  const {
    path,
    method,
    data,
    contentType = "application/json",
    serializerConfig = {},
  } = params;

  const baseURL =
    process.env.REACT_APP_APP_ENV === "dev"
      ? process.env.REACT_APP_DEV_BASE_URL
      : process.env.REACT_APP_STAGING_BASE_URL;

  const headers = {
    ...(token && {
      Authorization: `Bearer ${token}`,
    }),
    "Content-Type": contentType,
    Accept: contentType,
  };

  const formSerializer = serializerConfig;

  let url = `${baseURL}${path}`;

  const requestBody = {
    method,
    url,
    timeout: 20000,
    headers,
    formSerializer,
    data: contentType === "multipart/form-data" ? data : JSON.stringify(data),
    responseType: "json",
    params: params.queryParams,
  };
  // console.log(requestBody);
  try {
    const response = await Axios(requestBody);
    const result = response;
    return result;
  } catch (error) {
    console.log(error?.response.data);

    if (
      error?.response?.data?.message === "Unauthorized" ||
      error?.response.data?.message.message === "Unauthorized"
    ) {
      if (localStorage.getItem("accessToken")) {
        localStorage.removeItem("accessToken");
        return;
      } else {
        return;
      }
    }
    throw error;
  }
};
