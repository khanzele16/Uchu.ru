import React from 'react'
import { NavLink } from 'react-router-dom'
import './Register.css'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../../Redux/Slices/authSlice'
import toast from 'react-hot-toast'

const statusCatalog = ['Ученик', 'Учитель']

function Register() {
	const [isStatus, setIsStatus] = React.useState('Ученик')
	const dispatch = useDispatch()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	// const onSubmit = async data => {
	// 	const user = await dispatch(registerUser({ ...data, status: isStatus }))
	// 	console.log(user)
	// }
	return (
		<div className='Register'>
			<div className='Register-content'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='Register-content-form'
				>
					<div className='Register-content-form-title'>
						<h2>Регистрация</h2>
					</div>
					<div className='Register-content-form-email'>
						<img
							src='https://cdn-icons-png.flaticon.com/512/646/646094.png'
							alt=''
						/>
						<input
							{...register('email', {
								required: 'Укажите почту',
								pattern: {
									value: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
									message: 'Укажите почту',
								},
							})}
							placeholder='Почта'
						/>
						{errors?.email && (
							<div className='Register-email-errors'>
								{errors?.email.message}
							</div>
						)}
					</div>
					<div className='Register-content-form-fio'>
						<img
							src='https://cdn-icons-png.flaticon.com/512/747/747376.png'
							alt=''
						/>
						<input
							{...register('fio', {
								required: 'Укажите ваше ФИО',
							})}
							placeholder='ФИО'
						/>
						{errors?.fio && (
							<div className='Register-fio-errors'>{errors?.fio.message}</div>
						)}
					</div>
					<div className='Register-content-form-password'>
						<img
							src='https://cdn-icons-png.flaticon.com/512/2889/2889676.png'
							alt=''
						/>
						<input
							{...register('password', {
								required:
									'Укажите пароль, содержащий минимум 8 символов, среди которых должны быть - латинские буквы, специальный символ и цифры',
								pattern: {
									value:
										/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
									message:
										'Укажите пароль, содержащий минимум 8 символов, среди которых должны быть - латинские буквы, специальный символ и цифры',
								},
							})}
							placeholder='Пароль'
						/>
						{errors?.password && (
							<div className='Register-password-errors'>
								{errors?.password.message}
							</div>
						)}
					</div>
					<ul className='Register-content-form-status'>
						{statusCatalog.map((el, index) => (
							<li
								onClick={() => setIsStatus(el)}
								className={isStatus == el ? 'active-status' : ''}
								key={index}
							>
								{el}
							</li>
						))}
					</ul>
					<div className='Register-content-form-register'>
						<button>Зарегистрироваться</button>
					</div>
					<p id='Register-or'>или</p>
					<div className='Register-content-form-login'>
						<NavLink to='/login'>Войти</NavLink>
					</div>
				</form>
				<div className='Register-content-art'>
					<img
						id='rocket'
						src='https://cdn-icons-png.flaticon.com/512/10473/10473683.png'
						alt=''
					/>
					<div id='floor'></div>
					<img
						id='tools'
						src='https://cdn-icons-png.flaticon.com/512/2276/2276313.png'
						alt=''
					/>
					<img
						id='sun'
						src='https://cdn-icons-png.flaticon.com/512/1004/1004611.png'
						alt=''
					/>
				</div>
			</div>
		</div>
	)
}

export default Register
