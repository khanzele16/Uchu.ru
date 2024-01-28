import authSlice from './Slices/authSlice'
import postsSlice from './Slices/postsSlice'
import modalSlice from './Slices/modalSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
	reducer: {
		modal: modalSlice,
		posts: postsSlice,
		auth: authSlice,
	},
})

export default store
