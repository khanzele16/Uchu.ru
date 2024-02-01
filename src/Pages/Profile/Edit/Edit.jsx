import React from 'react'
import './Edit.css'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { logoutUser, updateUser } from '../../../Redux/Slices/authSlice'
import toast from 'react-hot-toast'
import { Navigate } from 'react-router-dom'
import { changeTheme, changeWallpaper } from '../../../Redux/Slices/themeSlice'

const statusCatalog = ['Ученик', 'Учитель']
const genderCatalog = ['Мужской', 'Женский']
const wallpapersCatalog = [
	{
		url: 'https://img.freepik.com/free-vector/paper-style-white-monochrome-background_52683-66443.jpg?w=996&t=st=1706806788~exp=1706807388~hmac=ee13ca11ad45602c1a29c22e3e32ef20d6e6c5eeaca6bcc46fdb6be59648b65b',
		title: 'Обои #1',
	},
	{
		url: 'https://img.freepik.com/free-vector/minimal-style-geometric-round-shape-blue-background_1017-45301.jpg?w=996&t=st=1706807186~exp=1706807786~hmac=b9a88e46ec799a7602432020f7f09ece910dae6a821d2905fa2ea40285f46a04',
		title: 'Обои #2',
	},
	{
		url: 'https://static.tildacdn.com/tild6239-3162-4137-a239-656163633333/14979252_SL_060521_4.jpg',
		title: 'Обои #3',
	},
	{
		url: 'https://sdelatsamkak.ru/wp-content/uploads/1/a/3/1a33f2d8dec114ff5a2f0771d9d14b4a.jpeg',
		title: 'Обои #4',
	},
	{
		url: 'https://img.freepik.com/free-vector/blue-bubble-patterned-background_53876-90685.jpg?w=996&t=st=1706808051~exp=1706808651~hmac=46a6abaca261a258b32f038b8fe937704483f3091254c31b8ce2169649f2632a',
		title: 'Обои #5',
	},
	{
		url: 'https://img.freepik.com/premium-vector/clean-minimalistic-blue-color-gradient-background-modern-simple-vibrant-backdrop_432495-430.jpg?w=996',
		title: 'Обои #6',
	},
]

function Edit() {
	const user = useSelector(state => state.auth.data)
	const isStatus = user._doc.status
	const isGender = user._doc.gender
	const [isText, setIsText] = React.useState(user._doc.about)
	const [isPassword, setIsPassword] = React.useState('')
	const dispatch = useDispatch()
	const theme = useSelector(state => state.theme.theme)
	const wallpaper = useSelector(state => state.theme.wallpaper)
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
						<h2>Интерфейс</h2>
					</div>
					<nav className='Edit-content-tools-settings'>
						<div className='Edit-content-tools-settings-theme'>
							<div className='Edit-content-tools-settings-theme-title'>
								<h3>Тема</h3>
							</div>
							<div
								onClick={
									theme == 'white'
										? () => dispatch(changeTheme('black'))
										: () => dispatch(changeTheme('white'))
								}
								id={theme == 'white' ? '' : 'theme-black-input'}
								className='Edit-content-tools-settings-theme-input'
							>
								<div
									className='Edit-content-tools-settings-theme-input-thumball'
									id={theme == 'white' ? '' : 'theme-black-thumball'}
								></div>
							</div>
						</div>
						<div className='Edit-content-tools-settings-wallpapers'>
							<div className='Edit-content-tools-settings-wallpapers-title'>
								<h3>Обои</h3>
							</div>
							<ul className='Edit-content-tools-settings-wallpapers-catalog'>
								{wallpapersCatalog.map((el, index) => (
									<li key={index}>
										<img src={el.url} alt='' />
										<div id='wallpaper-post'>
											<p>{el.title}</p>
											<button
												onClick={() => dispatch(changeWallpaper(el.url))}
												id={el.url == wallpaper ? 'wallpaper-chosen' : ''}
											>
												{el.url == wallpaper ? 'Выбрано' : 'Выбрать'}
											</button>
										</div>
									</li>
								))}
							</ul>
						</div>
					</nav>
				</nav>
			</div>
		</div>
	)
}

export default Edit
