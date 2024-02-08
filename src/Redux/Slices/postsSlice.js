import axios from './../../axios.js'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
	const { data } = await axios.get('/posts')
	return data
})

export const fetchPost = createAsyncThunk('posts/fetchPost', async postId => {
	const { data } = await axios.get('/posts/' + postId)
	return data
})

const initialState = {
	posts: {
		postsData: [],
		status: 'loading',
	},
	post: {
		postData: [],
		status: 'loading',
	},
}

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchPosts.pending, state => {
			state.posts.postsData = []
			return (state.posts.status = 'loading')
		}),
			builder.addCase(fetchPosts.fulfilled, (state, action) => {
				state.posts.postsData = action.payload
				return (state.posts.status = 'loaded')
			}),
			builder.addCase(fetchPosts.rejected, state => {
				state.posts.postsData = []
				return (state.posts.status = 'error')
			})
		builder.addCase(fetchPost.pending, state => {
			state.post.postData = []
			return (state.post.status = 'loading')
		}),
			builder.addCase(fetchPost.fulfilled, (state, action) => {
				state.post.postData = action.payload
				return (state.post.status = 'loaded')
			}),
			builder.addCase(fetchPost.rejected, state => {
				state.post.postData = []
				return (state.post.status = 'error')
			})
	},
})

export default postsSlice.reducer
