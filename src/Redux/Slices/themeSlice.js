import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	theme: 'white',
	wallpaper:
		'https://img.freepik.com/free-vector/blue-bubble-patterned-background_53876-90685.jpg?w=996&t=st=1706808051~exp=1706808651~hmac=46a6abaca261a258b32f038b8fe937704483f3091254c31b8ce2169649f2632a',
}

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		changeTheme: (state, action) => {
			state.theme = action.payload
		},
		changeWallpaper: (state, action) => {
			state.wallpaper = action.payload
      window.localStorage.setItem('wallpaper', action.payload)
		},
	},
})

export const { changeTheme, changeWallpaper } = themeSlice.actions
export default themeSlice.reducer
