import { configureStore } from '@reduxjs/toolkit'
import cookieSlice from './Slices/cookieSlice'
import postsSlice from './Slices/postsSlice'
import authSlice from './Slices/authSlice'

const store = configureStore({
	reducer: {
		cookie: cookieSlice,
		posts: postsSlice,
		auth: authSlice,
	},
})

export default store
