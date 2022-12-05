import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  token: localStorage.getItem('token'),
  email: '',
  password: '',
  resetPassword: '',
  rememberMe: false,
}

const userSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action) => {
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

export default userSlice
