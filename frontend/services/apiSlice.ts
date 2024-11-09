/* eslint-disable no-unused-vars */
import { BASE_URL } from "@/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: "include",
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [
    "Job",
    "Application",
    "User",
    "Auth",
    "Upload",
  ],
  endpoints: (_builder) => ({}),
});
