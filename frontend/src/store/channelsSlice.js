import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchChannels = createAsyncThunk(
  'channels/getCgannels',
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/v1/channels', {
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

const channelsSlice = createSlice({
  name: 'channels',
  initialState: {
    channels: [],
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChannels.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchChannels.rejected, (state, action) => {
        state.error = action.payload
        state.isLoading = false
      })
      .addCase(fetchChannels.fulfilled, (state, action) => {
        state.channels = action.payload
        state.error = null
        state.isLoading = false
      })
  },
})

export default channelsSlice.reducer
export const { setActualChannel } = channelsSlice.actions
export const selectChannels = (state) => state.channels.channels
export const selectChannelById = (channelId) => (state) =>
  state.channels.channels.find((channel) => channel.id === channelId)
export const selectError = (state) => state.channels.error
export const selectLoading = (state) => state.channels.isLoading
