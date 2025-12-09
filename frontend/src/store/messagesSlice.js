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

export const sendMessage = createAsyncThunk(
  'messages/sendMessage',
  async ({ token, newMessage }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/v1/messages', newMessage, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      return response.data
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message)
    }
  }
)

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    messages: [],
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
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.isLoading = false
        state.messages = action.payload
        console.log('Fulfiled messages: ', current(state))
        console.log('API вернул сообщения:', action.payload)
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.messages.push(action.payload)
        state.isLoading = false
        console.log('Fulfiled sendMessage: ', current(state))
      })
  },
})

export default messagesSlice.reducer

export const selectMessages = (state) => state.messages.messages
export const selectMessagesByChannelId = (channelId) => (state) =>
  state.messages.messages.filter((message) => message.channelId === channelId)
export const selectError = (state) => state.messages.error
