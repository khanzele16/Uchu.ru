import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from './../../axios.js'

export const loginUser = createAsyncThunk('auth/loginUser', async params => {
	try {
		const { data } = await axios.post('/auth/login', params)
		return data
	} catch (err) {
		return console.log(err)
	}
})

export const getMe = createAsyncThunk('auth/getMe', async () => {
	try {
		const { data } = await axios.get('/auth/me')
		return data
	} catch (err) {
		return console.log(err)
	}
})

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		data: null,
		status: 'loading',
	},
	extraReducers: builder => {
		builder.addCase(loginUser.pending, async state => {
			state.data = null
			state.status = 'loading'
		})
		builder.addCase(loginUser.fulfilled, async (state, action) => {
			state.data = action.payload
			state.status = 'loaded'
		})
		builder.addCase(loginUser.rejected, async state => {
			state.data = null
			state.status = 'error'
		})
		builder.addCase(getMe.pending, async state => {
			state.data = null
			state.status = 'loading'
		})
		builder.addCase(getMe.fulfilled, async (state, action) => {
			state.data = action.payload
			console.log(action)
			state.status = 'loaded'
		})
		builder.addCase(getMe.rejected, async state => {
			state.data = null
			state.status = 'error'
		})
	},
})

export const selectorAuth = state => Boolean(state.auth.data)

export default authSlice.reducer

/**
 * 		registerUser: create.asyncThunk(
			async params => {
				try {
					const { data } = axios.post('/auth/register', params)
					return data
				} catch (err) {
					return console.log(err)
				}
			},
			{
				pending: state => {
					state.data = null
					state.status = 'loading'
				},
				fulfilled: (state, action) => {
					state.data = action.payload
					state.status = 'loaded'
				},
				rejected: state => {
					state.data = null
					state.status = 'error'
				},
			}
		),
		authMe: create.asyncThunk(
			async () => {
				const { data } = axios.get('/auth/me')
				return data
			},
			{
				pending: state => {
					state.data = null
					state.status = 'loading'
				},
				fulfilled: state => {
					state.data = action.payload
					state.status = 'loaded'
				},
				rejected: state => {
					state.data = null
					state.status = 'error'
				},
			}
		),
 */
