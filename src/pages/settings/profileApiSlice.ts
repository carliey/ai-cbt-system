import { apiSlice } from "../../app/apiSlice";

const apiSliceWithTags = apiSlice.enhanceEndpoints({
  addTagTypes: ["Profile"],
});

/* eslint-disable @typescript-eslint/no-explicit-any */

export const profileApiSlice = apiSliceWithTags.injectEndpoints({
  endpoints: (builder) => ({
    updateProfile: builder.mutation<any, { name?: string; about?: string }>({
      query: (values) => ({
        url: "/api/profile/update",
        method: "PUT",
        body: { ...values },
      }),
      invalidatesTags: ["Profile"],
    }),
    updatePassword: builder.mutation<
      any,
      { old_password: string; new_password: string }
    >({
      query: (values) => ({
        url: "/api/profile/update-password",
        method: "PUT",
        body: { ...values },
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const { useUpdateProfileMutation, useUpdatePasswordMutation } =
  profileApiSlice;
