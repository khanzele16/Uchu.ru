import React from 'react'
import FAQ from './Pages/FAQ/FAQ.jsx'
import Practice from './Pages/Exercise/Practice/Practice.jsx'
import News from './Pages/Post/News/News.jsx'
import Login from './Pages/Auth/Login/Login.jsx'
import Header from './Components/Header/Header.jsx'
import Ad from './Components/Ad/Ad'
import FullPost from './Pages/Post/FullPost/FullPost.jsx'
import Register from './Pages/Auth/Register/Register.jsx'
import NotFound from './Pages/Other/NotFound/NotFound.jsx'
import Cookies from './Components/Other/Cookies/Cookies.jsx'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { selectorAuth } from './Redux/Slices/authSlice.js'
import Vote from './Components/Other/Vote/Vote.jsx'
import Profile from './Pages/Profile/Profile/Profile.jsx'
import Edit from './Pages/Profile/Edit/Edit.jsx'
import Stats from './Pages/Profile/Stats/Stats.jsx'
import PageLoading from './Pages/Other/PageLoading/PageLoading.jsx'
import { changeWallpaper } from './Redux/Slices/themeSlice.js'
import './App.css'
import Main from './Pages/Main/Main.jsx'
import Theory from './Pages/Exercise/Theory/Theory.jsx'
import FETPost from './Components/Exercise/Theory/FETPost/FETPost.jsx'
import FEPPost from './Components/Exercise/Practice/FEPPost/FEPPost.jsx'

const PageRouters = [
	{
		path: '/main',
		element: <Main />,
	},
	{
		path: '/theory',
		element: <Theory />,
	},
	{
		path: '/theory/:id',
		element: <FETPost />,
	},
	{
		path: '/practice',
		element: <Practice />,
	},
	{
		path: '/practice/:id',
		element: <FEPPost />,
	},
	{
		path: '/news',
		element: <News />,
	},
	{
		path: '/news/:id',
		element: <FullPost />,
	},
	{
		path: '/faq',
		element: <FAQ />,
	},
]
const ProfileRouters = [
	{
		path: '/profile',
		element: <Profile />,
	},
	{
		path: '/profile/edit',
		element: <Edit />,
	},
	{
		path: '/profile/stats',
		element: <Stats />,
	},
]
const AuthRouters = [
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/register',
		element: <Register />,
	},
]

function App() {
	const isCookies = useSelector(state => state.modal.isCookies)
	const isVote = useSelector(state => state.modal.isVotes)
	const isAuth = useSelector(selectorAuth)
	const status = useSelector(state => state.auth.status)
	const wallpaper = useSelector(state => state.theme.wallpaper)
	const dispatch = useDispatch()
	const resultRouters = [
		...PageRouters,
		...(isAuth ? ProfileRouters : AuthRouters),
	]
	React.useEffect(() => {
		const wallpaperToken = window.localStorage.getItem('wallpaper')
		if (wallpaperToken) {
			dispatch(changeWallpaper(wallpaperToken))
		}
	}, [])
	React.useEffect(() => {
		const body = document.getElementsByTagName('body')[0]
		body.style.backgroundImage = `url(${wallpaper})`
	}, [wallpaper])

	return (
		<div className='App'>
			{!isCookies ? <Cookies /> : !isVote ? <Vote /> : <></>}
			<header className='App-header'>
				<Header />
			</header>
			<div className='App-content'>
				<div className='App-content-panel'>
					<Ad />
				</div>
				<div className='App-content-inner'>
					{status == 'loading' ? (
						<PageLoading />
					) : (
						<Routes>
							{resultRouters.map((el, index) => (
								<Route key={index} path={el.path} element={el.element} />
							))}
							<Route path='*' element={<NotFound />} />
						</Routes>
					)}
				</div>
			</div>
			<Toaster reverseOrder={true} position='top-right' />
		</div>
	)
}

export default App
