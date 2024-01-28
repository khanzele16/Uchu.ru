import React from 'react'
import './Edit.css'
import { useSelector } from 'react-redux'

function Edit() {
	const user = useSelector(state => state.auth.data)
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
					<div className='Edit-content-account-form'>
						<div className='Edit-content-account-form-image'>
							<img src={user._doc.avatarUrl} />
						</div>
						<div className='Edit-content-account-form-email'>
							<div id='change-email'>
								<img
									src='https://cdn-icons-png.flaticon.com/512/646/646094.png'
									alt=''
								/>
								<input placeholder='Почта' />
							</div>
						</div>
						<div className='Edit-content-account-form-fio'>
							<img
								src='https://cdn-icons-png.flaticon.com/512/747/747376.png'
								alt=''
							/>
							<input placeholder='ФИО' />
						</div>
						<div className='Edit-content-account-form-password'>
							<img
								src='https://cdn-icons-png.flaticon.com/512/2889/2889676.png'
								alt=''
							/>
							<input placeholder='Пароль' />
						</div>
						<div className='Edit-content-account-form-status'>
							<input placeholder='Статус' />
						</div>
						<div className='Edit-content-account-form-gender'>
							<input placeholder='Пол' />
						</div>
					</div>
				</nav>
				<div className='Edit-content-tools'></div>
			</div>
		</div>
	)
}

export default Edit
