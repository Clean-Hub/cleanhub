import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    email: '',
    password: '',
    forgetPassword: '',
    rememberMe: false,
  },

  reducers: {
    login: (state, action) => {
      state.email = action.payload.email
      state.password = action.payload.password
      state.forgetPassword = action.payload.forgetPassword
      state.rememberMe = action.payload.rememberMe
    },
  },
})
