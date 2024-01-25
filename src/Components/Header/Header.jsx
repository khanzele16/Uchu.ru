import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { getMe, logoutUser, selectorAuth } from '../../Redux/Slices/authSlice'
import HLoading from '../Loading/HLoading'

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

const modalCatalog = [
	{
		icon: 'https://cdn-icons-png.flaticon.com/512/9039/9039067.png',
		title: 'Профиль',
		path: '/profile',
		id: 'header-profile',
	},
	{
		icon: 'https://cdn-icons-png.flaticon.com/512/2815/2815474.png',
		title: 'Настройки',
		path: '/profile/edit',
		id: 'header-edit',
	},
	{
		icon: 'https://cdn-icons-png.flaticon.com/512/2567/2567943.png',
		title: 'Статистика',
		path: '/profile/stats',
		id: 'header-stats',
	},
]

function Header() {
	const dispatch = useDispatch()
	const user = useSelector(state => state.auth.data)
	const status = useSelector(state => state.auth.status)
	const isAuth = useSelector(selectorAuth)
	const modalRef = React.useRef()
	const [isModal, setIsModal] = React.useState(false)
	React.useEffect(() => {
		dispatch(getMe())
	}, [])
	React.useEffect(() => {
		document.body.addEventListener('click', event => {
			if (event.composedPath().includes(modalRef.current)) {
				console.log('внутрь')
			}
		})
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
			{status == 'loading' ? (
				<div className='Header-auth'>
					<HLoading />
				</div>
			) : isAuth ? (
				<div onClick={() => setIsModal(!isModal)} className='Header-auth'>
					<img src={user._doc.avatarUrl} alt='' />
					<div className='Header-auth-info'>
						<p>
							{user._doc.fio.split(' ')[0] + ' ' + user._doc.fio.split(' ')[1]}
						</p>
						<p id='auth-status'>Статус: {user._doc.status}</p>
					</div>
					{isModal && (
						<div ref={modalRef} className='Header-modal'>
							<ul className='Header-modal-catalog'>
								{modalCatalog.map((el, index) => (
									<NavLink to={el.path} key={index}>
										<li id={el.id}>
											<img src={el.icon} alt='' />
											<p>{el.title}</p>
										</li>
									</NavLink>
								))}
								<li onClick={() => dispatch(logoutUser())} id='header-logout'>
									<img src='https://i.ibb.co/9Yj0P6b/logout-1.png' alt='' />
									<p>Выйти</p>
								</li>
							</ul>
						</div>
					)}
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
