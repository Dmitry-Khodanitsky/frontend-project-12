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
      console.log(response.data) // удалить в проде
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.statusText)
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
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
        console.log(current(state))
      })
      .addCase(fetchAuthToken.fulfilled, (state, action) => {
        const { user, token } = action.payload
        state.error = null
        state.user = user
        state.token = token
        state.isLoading = false
        if (token) {
          localStorage.setItem('token', token)
        }
      })
    // добавить pending
  },
})

export default authSlice.reducer

export const { logOut } = authSlice.actions
export const selectToken = (state) => state.auth.token
export const selectError = (state) => state.auth.error
