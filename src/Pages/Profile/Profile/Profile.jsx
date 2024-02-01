import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Profile.css'

const Profile = () => {
	const user = useSelector(state => state.auth.data)
	return (
		<div className='Profile'>
			<div className='Profile-content'>
				<div className='Profile-content-title'>
					<h2>Профиль (Вы)</h2>
					<button>
						<NavLink to='/profile/edit'>Редактировать профиль</NavLink>
					</button>
				</div>
				<div className='Profile-content-form'>
					<img src={user._doc.avatarUrl} alt='' />
					<div className='Profile-content-form-info'>
						<p id='profile-email'>
							<b>Email:</b>
							{user._doc.email}
						</p>
						<p id='profile-fio'>
							<b>ФИО:</b>
							{user._doc.fio}
						</p>
						<p id='profile-status'>
							<b>Статус:</b>
							{user._doc.status}
						</p>
						<p id='profile-gender'>
							<b>Пол:</b>
							{user._doc.gender}
						</p>
						<p id='profile-about'>
							<b>Описание:</b>
							{user._doc.about == '' ? 'Нет' : user._doc.about}
						</p>
					</div>
				</div>
				<div className='Profile-content-stats'>
					<h3>Статистика</h3>
					<div className='Profile-content-stats-info'>
						<p>Статистики нет...</p>
					</div>
					<button>
						<NavLink to='/profile/stats'>Просмотреть подробнее</NavLink>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Profile
