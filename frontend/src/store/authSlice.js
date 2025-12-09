import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchAuthToken = createAsyncThunk(
  'auth/logIn',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/v1/login', {
        username,
        password,
      })
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.statusText)
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: null,
    token: localStorage.getItem('token'),
    error: null,
    isLoading: false,
  },
  reducers: {
    logOut: (state) => {
      state.token = localStorage.removeItem('token')
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthToken.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchAuthToken.rejected, (state, action) => {
        state.error = action.payload
        state.isLoading = false
      })
      .addCase(fetchAuthToken.fulfilled, (state, action) => {
        const { username, token } = action.payload
        state.error = null
        state.username = username
        state.token = token
        state.isLoading = false
        console.log('Пользователь после логина:', username)
        if (token) {
          localStorage.setItem('token', token)
        }
      })
    // добавить pending
  },
})

export default authSlice.reducer

export const { logOut } = authSlice.actions
export const selectCurrentUser = (state) => state.auth.username
export const selectToken = (state) => state.auth.token
export const selectError = (state) => state.auth.error
