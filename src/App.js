import React from 'react'
import KEGE from './Pages/KEGE/KEGE.jsx'
import Header from './Components/Header/Header.jsx'
import APanel from './Components/Ad/APanel/APanel.jsx'
import Cookies from './Components/Cookies/Cookies.jsx'
import ABanner from './Components/Ad/ABanner/ABanner.jsx'
import { useSelector } from 'react-redux'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Blog from './Pages/Blog/Blog.jsx'
import FAQ from './Pages/FAQ/FAQ.jsx'
import FullPost from './Pages/FullPost/FullPost.jsx'
import Login from './Pages/Auth/Login/Login.jsx'
import Register from './Pages/Auth/Register/Register.jsx'
import { Toaster } from 'react-hot-toast'

const Routers = [
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
]

function App() {
	const resultRouters = []
	const isLocale = useSelector(state => state.cookie.isLocale)
	return (
		<div className='App'>
			{!isLocale && <Cookies />}
			<header className='App-header'>
				<Header />
			</header>
			<div className='App-content'>
				<div className='App-content-panel'>
					<APanel />
				</div>
				<div className='App-content-inner'>
					<div className='App-content-inner-main'>
						<Routes>
							<Route path='/kege' element={<KEGE />} />
							<Route path='/blog' element={<Blog />} />
							<Route path='/blog/:id' element={<FullPost />} />
							<Route path='/faq' element={<FAQ />} />
							<Route path='/login' element={<Login />} />
							<Route path='/register' element={<Register />} />
						</Routes>
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
