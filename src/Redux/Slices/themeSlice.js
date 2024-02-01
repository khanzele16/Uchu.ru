import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	theme: 'white',
	wallpapers: '',
}

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {},
})
