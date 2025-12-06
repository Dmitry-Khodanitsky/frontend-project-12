import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import channelsSlice from './channelsSlice'
import messagesSlice from './messagesSlice'

const store = configureStore({
  reducer: {
    // Свойство auth будет внутри объекта общего состояния: state.autj
    auth: authReducer,
    channels: channelsSlice,
    messages: messagesSlice,
  },
})

export default store
