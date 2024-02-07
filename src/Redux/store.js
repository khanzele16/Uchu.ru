import authSlice from './Slices/authSlice'
import postsSlice from './Slices/postsSlice'
import modalSlice from './Slices/modalSlice'
import themeSlice from './Slices/themeSlice'
import exerciseSlice from './Slices/exerciseSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
	reducer: {
		auth: authSlice,
		modal: modalSlice,
		posts: postsSlice,
		theme: themeSlice,
		exercise: exerciseSlice,
	},
})

export default store
