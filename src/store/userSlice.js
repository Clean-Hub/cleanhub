import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    token: null,
    email: '',
    password: '',
    resetPassword: '',
    rememberMe: false,
  },

  reducers: {
    user: (state, action) => {
      state.email = action.payload.email
      state.password = action.payload.password
      state.resetPassword = action.payload.resetPassword
      state.rememberMe = action.payload.rememberMe
      state.token = action.payload.token
    },
    logout: (state, action) => {
      state.email = ''
      state.password = ''
      state.resetPassword = ''
    },
  },
})

export default loginSlice
