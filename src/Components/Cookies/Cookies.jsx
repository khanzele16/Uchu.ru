import React from 'react'
import './Cookies.css'
import { removeCookie } from '../../Redux/Slices/cookieSlice'
import { useDispatch } from 'react-redux'

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
