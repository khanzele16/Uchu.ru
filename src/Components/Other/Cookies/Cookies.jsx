import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCookie } from '../../../Redux/Slices/modalSlice'
import './Cookies.css'

function Cookies() {
	const dispatch = useDispatch()

	return (
		<div className='Cookies'>
			<div className='Cookies-content'>
				<img
					src='https://cdn-icons-png.freepik.com/512/629/629587.png?ga=GA1.1.495391732.1703436678&'
					alt=''
				/>
				<p>
					Предупреждаем! Мы используем файлы Cookie в целях улучшения качества
					работы нашего сайта
				</p>
			</div>
			<img
				onClick={() => dispatch(removeCookie())}
				src='https://cdn-icons-png.flaticon.com/512/10308/10308565.png'
				alt=''
			/>
		</div>
	)
}

export default Cookies
