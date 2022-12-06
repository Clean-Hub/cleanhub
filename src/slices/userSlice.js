import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../utils/axiosInstance'

const initialState = {
  token: localStorage.getItem('token'),
  email: '',
  password: '',
  resetPassword: '',
  rememberMe: false,
  _id: '',
  registerStatus: '',
  registerError: '',
  loginStatus: '',
  loginError: '',
  userLoaded: false,
}

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (values, { rejectWithValue }) => {
    try {
      const token = await axiosInstance.post('/register', {})
    } catch (error) {}
  }
)

const userSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},

  extraReducers: () => {},

  // another way of consuming api
  // reducers: {
  //   login: (state, action) => {
  //     state.email = action.payload.email
  //     state.password = action.payload.password
  //     state.resetPassword = action.payload.resetPassword
  //     state.rememberMe = action.payload.rememberMe
  //     state.token = action.payload.token
  //   },
  //   logout: (state, action) => {
  //     state.email = ''
  //     state.password = ''
  //     state.resetPassword = ''
  //   },
  // },
})

export default userSlice
