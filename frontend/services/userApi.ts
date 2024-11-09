import { AUTH_URL, USERS_URL } from "@/constants";
import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        method: "POST",
        credentials: "include",
        body: data,
        url: `${AUTH_URL}/login`,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        method: "POST",
        body: data,
        url: `${AUTH_URL}/register`,
      }),
    }),
    logout: builder.mutation({
      query: (data) => ({
        method: "POST",
        body: data,
        url: `${AUTH_URL}/logout`,
      }),
    }),
    getAllUser: builder.query({
      query: (data) => ({
        method: "GET",
        body: data,
        credentials: "include",
        url: `${USERS_URL}`,
      }),
    }),
    getSingleUser: builder.query({
      query: (data) => ({
        method: "GET",
        body: data,
        credentials: "include",
        url: `${USERS_URL}/${data?.id}`,
      }),
    }),
    adminDeleteUser: builder.mutation({
      query: (data) => ({
        method: "DELETE",
        body: data,
        credentials: "include",
        url: `${USERS_URL}/${data?.id}`,
      }),
    }),
    adminUpdateUser: builder.mutation({
      query: (data) => ({
        method: "PUT",
        body: data,
        credentials: "include",
        url: `${USERS_URL}/${data?.id}`,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useGetAllUserQuery,
  useGetSingleUserQuery,
  useAdminUpdateUserMutation,
  useAdminDeleteUserMutation,
} = userApiSlice;
