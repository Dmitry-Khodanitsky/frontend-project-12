import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    currentChannelId: null,
    modal: {
      isOpened: false,
      type: null, // addChannel, removeChannel, renameChannel
      extra: null, // принимает id канала при удалении и переименовывании {id: String(number)}
    },
  },
  reducers: {
    setCurrentChannelId: (state, { payload }) => {
      state.currentChannelId = payload
    },
    openModal: (state, { payload }) => {
      const { type, channelId } = payload
      state.modal.isOpened = true
      state.modal.type = type
      state.modal.extra = { id: channelId }
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
export const currentChannelId = state => state.ui.currentChannelId
export const modalState = state => state.ui.modal
