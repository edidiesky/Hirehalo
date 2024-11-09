
import { JOB_URL } from "@/constants";
import { apiSlice } from "./apiSlice";

export const jobApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllJob: builder.query({
      query: (_data) => ({
        method: "GET",
        credentials: "include",
        url: `${JOB_URL}`,
      }),
    }),
    getSingleJob: builder.query({
      query: (data) => ({
        method: "GET",
        credentials: "include",
        url: `${JOB_URL}/${data}`,
      }),
    }),
    createJob: builder.mutation({
      query: (data) => ({
        method: "POST",
        body: data,
        credentials: "include",
        url: `${JOB_URL}`,
      }),
    }),
    getAllAdminJob: builder.query({
      query: (_data) => ({
        method: "GET",
        credentials: "include",
        url: `${JOB_URL}/admin`,
      }),
    }),
   
    adminDeleteJob: builder.mutation({
      query: (data) => ({
        method: "DELETE",
        body: data,
        credentials: "include",
        url: `${JOB_URL}/admin/${data?.id}`,
      }),
    }),
    adminUpdateJob: builder.mutation({
      query: (data) => ({
        method: "PUT",
        body: data,
        credentials: "include",
        url: `${JOB_URL}/admin/${data?.id}`,
      }),
    }),
  }),
});

export const {
  useGetAllJobQuery,
  useGetSingleJobQuery,
  useAdminUpdateJobMutation,
  useAdminDeleteJobMutation,
  useGetAllAdminJobQuery,
  useCreateJobMutation
} = jobApiSlice;
