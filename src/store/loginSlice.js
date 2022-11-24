import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    email: '',
    password: '',
    resetPassword: '',
    rememberMe: false,
  },

  reducers: {
    login: (state, action) => {
      state.email = action.payload.email
      state.password = action.payload.password
      state.resetPassword = action.payload.resetPassword
      state.rememberMe = action.payload.rememberMe
    },
  },
})
