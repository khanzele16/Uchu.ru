import React from 'react'
import './Edit.css'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { logoutUser, updateUser } from '../../../Redux/Slices/authSlice'
import toast from 'react-hot-toast'
import { Navigate } from 'react-router-dom'

const statusCatalog = ['Ученик', 'Учитель']
const genderCatalog = ['Мужской', 'Женский']

function Edit() {
	const user = useSelector(state => state.auth.data)
	const isStatus = user._doc.status
	const isGender = user._doc.gender
	const [isText, setIsText] = React.useState(user._doc.about)
	const [isPassword, setIsPassword] = React.useState('')
	const dispatch = useDispatch()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
	})
	const onSubmit = async () => {
		if (isPassword == '') {
			await dispatch(
				updateUser({
					email: user._doc.email,
					about: isText,
				})
			)
			toast.success('Профиль успешно обновлён')
		} else {
			await dispatch(
				updateUser({
					email: user._doc.email,
					password: isPassword,
					about: isText,
				})
			)
			dispatch(logoutUser())
			window.localStorage.removeItem('token')
			toast.success('Пароль успешно изменён. Войдите снова')
			return <Navigate to='login' />
		}
	}

	return (
		<div className='Edit'>
			<div className='Edit-content'>
				<div className='Edit-content-title'>
					<h2>Настройки</h2>
				</div>
				<nav className='Edit-content-account'>
					<div className='Edit-content-account-title'>
						<h2>Аккаунт</h2>
					</div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='Edit-content-account-form'
					>
						<div className='Edit-content-account-form-image'>
							<img src={user._doc.avatarUrl} />
						</div>
						<div className='Edit-content-account-form-email'>
							<div id='change-email'>
								<img
									src='https://cdn-icons-png.flaticon.com/512/646/646094.png'
									alt=''
								/>
								<input
									{...register('email', {
										required: false,
									})}
									value={user._doc.email}
									placeholder='Почта'
									disabled
								/>
							</div>
						</div>
						<div className='Edit-content-account-form-fio'>
							<div id='change-fio'>
								<img
									src='https://cdn-icons-png.flaticon.com/512/747/747376.png'
									alt=''
								/>
								<input
									{...register('fio', {
										required: false,
									})}
									value={user._doc.fio}
									placeholder='ФИО'
									disabled
								/>
							</div>
						</div>
						<div className='Edit-content-account-form-password'>
							<div id='change-password'>
								<img
									src='https://cdn-icons-png.flaticon.com/512/2889/2889676.png'
									alt=''
								/>
								<input
									{...register('password', {
										pattern: {
											value:
												/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
											message:
												'Укажите пароль, содержащий минимум 8 символов, среди которых должны быть - латинские буквы, специальный символ и цифры',
										},
									})}
									value={isPassword}
									onChange={event => setIsPassword(event.target.value)}
									placeholder='Пароль'
								/>
								{errors?.password && (
									<div className='Edit-content-account-form-password-error'>
										{errors?.password.message}
									</div>
								)}
							</div>
						</div>
						<div className='Edit-content-account-form-about'>
							<textarea
								value={isText}
								onChange={event => setIsText(event.target.value)}
								placeholder='Описание профиля'
							/>
							{isText.length > 50 && (
								<div className='Edit-content-account-form-about-error'>
									Описание профиля должно быть менее 50 символов
								</div>
							)}
						</div>
						<ul className='Edit-content-account-form-gender'>
							{genderCatalog.map((el, index) => (
								<li
									className={isGender == el ? 'active-gender' : ''}
									key={index}
								>
									{el}
								</li>
							))}
						</ul>
						<ul className='Edit-content-account-form-status'>
							{statusCatalog.map((el, index) => (
								<li
									className={isStatus == el ? 'active-status' : ''}
									key={index}
								>
									{el}
								</li>
							))}
						</ul>
						<button>Изменить данные</button>
					</form>
				</nav>
				<nav className='Edit-content-tools'>
					<div className='Edit-content-tools-title'>
						<h2>Инструменты</h2>
					</div>
					<div className='Edit-content-tools-'></div>
				</nav>
			</div>
		</div>
	)
}

export default Edit
