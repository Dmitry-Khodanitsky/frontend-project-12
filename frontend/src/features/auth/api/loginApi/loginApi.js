import { baseApi } from '@/app/api/baseApi'
import { setCredentials } from '../../model/authSlice'

export const loginApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: ({ username, password }) => ({
        url: `login`,
        method: 'POST',
        body: { username, password },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(
            setCredentials({
              token: data.token,
              username: data.username,
            }),
          )
        }
        catch (err) {
          console.error('Login failed:', err)
        }
      },
    }),
  }),
})

export const { useLoginMutation } = loginApi
