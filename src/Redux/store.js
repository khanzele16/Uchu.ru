import authSlice from './Slices/authSlice'
import postsSlice from './Slices/postsSlice'
import modalSlice from './Slices/modalSlice'
import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './Slices/themeSlice'

const store = configureStore({
	reducer: {
		modal: modalSlice,
		posts: postsSlice,
		auth: authSlice,
		theme: themeSlice,
	},
})

export default store
