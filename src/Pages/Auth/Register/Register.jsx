import React from 'react'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../Redux/Slices/authSlice'
import './Register.css'

const statusCatalog = ['Ученик', 'Учитель']
const genderCatalog = ['Мужской', 'Женский']

function Register() {
	const [isStatus, setIsStatus] = React.useState('Ученик')
	const [isGender, setIsGender] = React.useState('Мужской')
	const dispatch = useDispatch()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const navigate = useNavigate()
	const onSubmit = async data => {
		const user = await dispatch(
			registerUser({ ...data, gender: isGender, status: isStatus })
		)
		if (!user.payload) {
			return toast.error('Не удалось зарегистрироваться')
		} else {
			if (user.payload.token) {
				window.localStorage.setItem('token', user.payload.token)
				toast.success(
					`Вы зарегистрировались, ${user.payload._doc.fio.split(' ')[0]} ${
						user.payload._doc.fio.split(' ')[1]
					}`
				)
				return navigate('/profile')
			} else {
				return toast.error('Не удалось зарегистрироваться')
			}
		}
	}

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
					<ul className='Register-content-form-gender'>
						{genderCatalog.map((el, index) => (
							<li
								onClick={() => setIsGender(el)}
								className={isGender == el ? 'active-gender' : ''}
								key={index}
							>
								{el}
							</li>
						))}
					</ul>
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
						src='https://cdn-icons-png.freepik.com/512/5604/5604298.png?ga=GA1.1.2065175142.1706196907&'
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
