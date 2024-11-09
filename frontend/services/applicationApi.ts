import { APPLICATION_URL } from "@/constants";
import { apiSlice } from "./apiSlice";

export const ApplicationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createApplication: builder.mutation({
      query: (data) => ({
        method: "POST",
        body: data,
        credentials: "include",
        url: `${APPLICATION_URL}`,
      }),
    }),
    getUserAppliedJobs: builder.query({
      query: (_data) => ({
        method: "GET",
        credentials: "include",
        url: `${APPLICATION_URL}/jobsapplied`,
      }),
    }),
    getSingleApplication: builder.query({
      query: (data) => ({
        method: "GET",
        credentials: "include",
        url: `${APPLICATION_URL}/admin/${data?.id}`,
      }),
    }),
    getAllApplication: builder.query({
      query: (_data) => ({
        method: "GET",
        credentials: "include",
        url: `${APPLICATION_URL}/admin`,
      }),
    }),
    updateApplicationToSuccess: builder.mutation({
      query: (data) => ({
        method: "PUT",
        body: data,
        credentials: "include",
        url: `${APPLICATION_URL}/admin/${data?.id}`,
      }),
    }),
    deleteApplication: builder.mutation({
      query: (data) => ({
        method: "PUT",
        body: data,
        credentials: "include",
        url: `${APPLICATION_URL}/admin/${data?.id}`,
      }),
    }),
  }),
});

export const {
  useCreateApplicationMutation,
  useGetSingleApplicationQuery,
  useUpdateApplicationToSuccessMutation,
  useGetAllApplicationQuery,
  useDeleteApplicationMutation
} = ApplicationApiSlice;
