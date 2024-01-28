import React from 'react'
import FAQ from './Pages/FAQ/FAQ.jsx'
import KEGE from './Pages/KEGE/KEGE.jsx'
import Blog from './Pages/Post/Blog/Blog.jsx'
import Login from './Pages/Auth/Login/Login.jsx'
import Header from './Components/Header/Header.jsx'
import APanel from './Components/Ad/APanel/APanel.jsx'
import FullPost from './Pages/Post/FullPost/FullPost.jsx'
import ABanner from './Components/Ad/ABanner/ABanner.jsx'
import Register from './Pages/Auth/Register/Register.jsx'
import NotFound from './Pages/Other/NotFound/NotFound.jsx'
import Cookies from './Components/Other/Cookies/Cookies.jsx'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { selectorAuth } from './Redux/Slices/authSlice.js'
import './App.css'
import Vote from './Components/Other/Vote/Vote.jsx'
import Profile from './Pages/Profile/Profile/Profile.jsx'
import Edit from './Pages/Profile/Edit/Edit.jsx'
import Stats from './Pages/Profile/Stats/Stats.jsx'
import PageLoading from './Pages/Other/PageLoading/PageLoading.jsx'

const PageRouters = [
	{
		path: '/kege',
		element: <KEGE />,
	},
	{
		path: '/blog',
		element: <Blog />,
	},
	{
		path: '/blog/:id',
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
	const resultRouters = [
		...PageRouters,
		...(isAuth ? ProfileRouters : AuthRouters),
	]

	return (
		<div className='App'>
			{!isCookies ? <Cookies /> : !isVote ? <Vote /> : <></>}
			<header className='App-header'>
				<Header />
			</header>
			<div className='App-content'>
				<div className='App-content-panel'>
					<APanel />
				</div>
				<div className='App-content-inner'>
					<div className='App-content-inner-main'>
						{
							(status == 'loading' ? (
								<PageLoading />
							) : (
								<Routes>
									{resultRouters.map((el, index) => (
										<Route key={index} path={el.path} element={el.element} />
									))}
									<Route path='*' element={<NotFound />} />
								</Routes>
							))
						}
					</div>
					<div className='App-content-inner-banner'>
						<ABanner />
					</div>
				</div>
			</div>
			<Toaster reverseOrder={true} position='top-right' />
		</div>
	)
}

export default App
