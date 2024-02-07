import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios'

export const getResults = createAsyncThunk('results/getResults', async () => {
	const { data } = await axios.get('/result')
	return data
})

export const getResult = createAsyncThunk('result/getResult', async id => {
	const { data } = await axios.get(`/result/${id}`)
	return data
})

export const setExercise = createAsyncThunk('result/setExercise', async (params) => {
	const { data } = await axios.post('/result', params)
	return data
})

const initialState = {
	results: {
		data: null,
		status: 'loading',
	},
	result: {
		data: null,
		status: 'loading',
	},
}

const exerciseSlice = createSlice({
	name: 'exercise',
	initialState,
	extraReducers: builder => {
		builder.addCase(getResults.pending, state => {
			state.results.data = null
			state.results.status = 'loading'
		})
		builder.addCase(getResults.fulfilled, (state, action) => {
			state.results.data = action.payload
			state.results.status = 'loaded'
		})
		builder.addCase(getResults.rejected, state => {
			state.results.data = null
			state.results.status = 'error'
		})
		builder.addCase(getResult.pending, state => {
			state.result.data = null
			state.result.status = 'loading'
		})
		builder.addCase(getResult.fulfilled, (state, action) => {
			state.result.data = action.payload
			state.result.status = 'loaded'
		})
		builder.addCase(getResult.rejected, state => {
			state.result.data = null
			state.result.status = 'error'
		})
	},
})

export default exerciseSlice.reducer
