import React from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import './Login.css'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../Redux/Slices/authSlice'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

function Login() {
	const [isShow, setIsShow] = React.useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const dispatch = useDispatch()
	const onSubmit = async data => {
		const user = await dispatch(loginUser(data))
		if (!user.payload) {
			return toast.error('Не удалось авторизоваться')
		} else {
			if (user.payload.token) {
				window.localStorage.setItem('token', user.payload.token)
				toast.success(
					`Вы успешно авторизовались как ${
						user.payload._doc.fio.split(' ')[0]
					} ${user.payload._doc.fio.split(' ')[1]}`
				)
				return <Navigate to='/kege' />
			} else {
				return toast.error('Не удалось авторизоваться')
			}
		}
	}

	return (
		<div className='Login'>
			<div className='Login-content'>
				<form onSubmit={handleSubmit(onSubmit)} className='Login-content-form'>
					<div className='Login-content-form-title'>
						<h2>Войти</h2>
					</div>
					<div className='Login-content-form-email'>
						<img
							src='https://cdn-icons-png.flaticon.com/512/646/646094.png'
							alt=''
						/>
						<input
							{...register('email', {
								required: 'Укажите почту',
							})}
							type='text'
							placeholder='Почта'
						/>
					</div>
					<div className='Login-content-form-password'>
						<img
							src='https://cdn-icons-png.flaticon.com/512/2889/2889676.png'
							alt=''
						/>
						<input
							{...register('password', {
								required: 'Укажите пароль',
							})}
							type={isShow ? 'text' : 'password'}
							placeholder='Пароль'
						/>
						<img
							id='Login-eye'
							onClick={() => setIsShow(!isShow)}
							src={
								isShow
									? 'https://cdn-icons-png.flaticon.com/512/709/709612.png'
									: 'https://cdn-icons-png.flaticon.com/512/2767/2767146.png'
							}
							alt=''
						/>
					</div>
					<div className='Login-content-form-login'>
						<button>Войти</button>
					</div>
					<p id='Login-or'>или</p>
					<div className='Login-content-form-register'>
						<NavLink to='/register'>Зарегистрироваться</NavLink>
					</div>
				</form>
				<div className='Login-content-art'>
					<img
						id='rocket'
						src='https://cdn-icons-png.flaticon.com/512/10473/10473683.png'
						alt=''
					/>
					<img
						id='sky-1'
						src='https://cdn-icons-png.flaticon.com/512/2661/2661190.png'
						alt=''
					/>
					<img
						id='sky-2'
						src='https://cdn-icons-png.flaticon.com/512/2661/2661190.png'
						alt=''
					/>
					<img
						id='sky-3'
						src='https://cdn-icons-png.flaticon.com/512/2661/2661190.png'
						alt=''
					/>
					<img
						id='cosmonaut'
						src='https://cdn-icons-png.flaticon.com/512/2026/2026519.png'
						alt=''
					/>
					<img
						id='fire'
						src='https://cdn-icons-png.flaticon.com/512/785/785116.png'
						alt=''
					/>
				</div>
			</div>
		</div>
	)
}

export default Login
