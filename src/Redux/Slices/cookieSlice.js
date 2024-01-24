import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLocale: window.localStorage.getItem('isCookies') == 'true',
}

const cookieSlice = createSlice({
	name: 'cookie',
	initialState,
	reducers: {
		removeCookie(state) {
			state.isLocale = true
			window.localStorage.setItem('isCookies', true)
		},
	},
})

export const { removeCookie } = cookieSlice.actions
export default cookieSlice.reducer
