import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isCookies: window.localStorage.getItem('isCookies') == 'true',
	isVotes: window.localStorage.getItem('isVotes') == 'true',
}

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		removeCookie(state) {
			state.isCookies = true
			window.localStorage.setItem('isCookies', true)
		},
		removeVote(state) {
			state.isVotes = true
			window.localStorage.setItem('isVotes', true)
		},
	},
})

export const { removeCookie, removeVote } = modalSlice.actions
export default modalSlice.reducer
