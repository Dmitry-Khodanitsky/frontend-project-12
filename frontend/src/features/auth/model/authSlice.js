import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: localStorage.getItem('username') || null,
    token: localStorage.getItem('token') || null,
  },
  reducers: {
    setCredentials: (state, { payload }) => {
      const { username, token } = payload

      state.token = token
      state.username = username
      localStorage.setItem('token', token)
      localStorage.setItem('username', username)
    },
    logOut: (state) => {
      state.token = null
      state.username = null
      localStorage.removeItem('token')
      localStorage.removeItem('username')
    },
  },
})

export default authSlice.reducer
export const { logOut, setCredentials } = authSlice.actions
export const selectToken = state => state.auth.token
export const selectUser = state => state.auth.username
