import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchMessages = createAsyncThunk(
  'messages/getMessages',
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/v1/messages', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.statusText)
    }
  }
)

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    messages: [
      { id: '1', body: 'text message', channelId: '1', username: 'admin ' },
    ],
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.error = action.payload
        state.isLoading = false
      })
      .addCase(fetchMessages.fulfilled, (state) => {
        //state.messages = action.payload
        state.isLoading = false
        console.log('Fulfiled messages: ', current(state))
      })
  },
})

export default messagesSlice.reducer

export const selectMessages = (state) => state.messages.messages
export const selectMessagesByChannelId = (channelId) => (state) =>
  state.messages.messages.filter((message) => message.channelId === channelId)
export const selectError = (state) => state.messages.error
