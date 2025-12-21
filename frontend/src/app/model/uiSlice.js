import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    currentChannelId: '1',
    defaultChannekId: '1',
    modal: {
      isOpened: false,
      type: null,
      extra: null,
    },
  },
  reducers: {
    setCurrentChannelId: (state, { payload }) => {
      state.currentChannelId = payload
      console.log('Current channel: ', payload)
    },
    openModal: (state, { payload }) => {
      const { type, channelId } = payload
      state.modal.isOpened = true
      state.modal.type = type
      state.modal.extra = channelId
    },
    closeModal: (state) => {
      state.modal.isOpened = false
      state.modal.type = null
      state.modal.extra = null
    },
  },
})

export default uiSlice.reducer
export const { setCurrentChannelId, openModal, closeModal } = uiSlice.actions
export const currentChannenId = (state) => state.ui.currentChannelId
