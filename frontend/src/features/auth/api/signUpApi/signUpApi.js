import { baseApi } from '@/app/api/baseApi'
import { setCredentials } from '../../model/authSlice'

export const signUpApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: ({ username, password }) => ({
        url: `signup`,
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
            })
          )
        } catch (err) {
          console.error('Sign Up failed:', err)
        }
      },
    }),
  }),
})

export const { useSignUpMutation } = signUpApi
