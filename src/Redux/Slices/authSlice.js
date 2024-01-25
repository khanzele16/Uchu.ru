import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from './../../axios.js'

export const loginUser = createAsyncThunk('data/loginUser', async params => {
	const { data } = await axios.post('/auth/login', params)
	return data
})

export const registerUser = createAsyncThunk(
	'data/registerUser',
	async params => {
		const { data } = await axios.post('/auth/register', params)
		return data
	}
)

export const getMe = createAsyncThunk('data/getMe', async () => {
	const { data } = await axios.get('/auth/me')
	return data
})

const initialState = {
	data: null,
	status: 'loading',
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logoutUser(state) {
			state.data = null
			window.localStorage.removeItem('token')
		},
	},
	extraReducers: builder => {
		builder.addCase(loginUser.pending, state => {
			state.data = null
			state.status = 'loading'
		})
		builder.addCase(loginUser.fulfilled, (state, action) => {
			state.data = action.payload
			state.status = 'loaded'
		})
		builder.addCase(loginUser.rejected, state => {
			state.data = null
			state.status = 'error'
		})
		builder.addCase(getMe.pending, state => {
			state.data = null
			state.status = 'loading'
		})
		builder.addCase(getMe.fulfilled, (state, action) => {
			state.data = action.payload
			state.status = 'loaded'
		})
		builder.addCase(getMe.rejected, state => {
			state.data = null
			state.status = 'error'
		})
		builder.addCase(registerUser.pending, state => {
			state.data = null
			state.status = 'loading'
		})
		builder.addCase(registerUser.fulfilled, (state, action) => {
			state.data = action.payload
			state.status = 'loaded'
		})
		builder.addCase(registerUser.rejected, state => {
			state.data = null
			state.status = 'error'
		})
	},
})

export const selectorAuth = state => Boolean(state.auth.data)
export const { logoutUser } = authSlice.actions
export default authSlice.reducer
