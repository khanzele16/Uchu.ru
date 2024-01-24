import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { getMe, selectorAuth } from '../../Redux/Slices/authSlice'

const navigation = [
	{
		title: 'КЕГЭ',
		path: '/kege',
	},
	{
		title: 'Блог',
		path: '/blog',
	},
	{
		title: 'FAQ',
		path: '/faq',
	},
]

function Header() {
	const dispatch = useDispatch()
	const user = useSelector(state => state.auth.usersData)
	const isAuth = useSelector(selectorAuth)
	React.useEffect(() => {
		dispatch(getMe())
	}, [])

	return (
		<div className='Header'>
			<div className='Header-title'>
				<NavLink to='/kege'>
					<h1>Uchu.ru</h1>
				</NavLink>
			</div>
			<nav className='Header-menu'>
				{navigation.map((el, index) => (
					<NavLink to={el.path} key={index}>
						<li>{el.title}</li>
					</NavLink>
				))}
			</nav>
			{isAuth ? (
				<div className='Header-auth'>
					<img src='' alt='' />
					<p></p>
				</div>
			) : (
				<div className='Header-button'>
					<NavLink to='/login'>Войти</NavLink>
				</div>
			)}
		</div>
	)
}

export default Header
