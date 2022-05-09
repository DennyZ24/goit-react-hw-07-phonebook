import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react'
import { configureStore} from '@reduxjs/toolkit';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6278e4a86ac99a91065ee9cb.mockapi.io' }),
  tagTypes: ['Contacts'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => 'contacts',
      providesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
       invalidatesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: (newContact) => ({
        url: 'contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
  })
})

export const { useGetContactsQuery, useDeleteContactMutation, useAddContactMutation } = contactsApi;

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(),contactsApi.middleware]
})