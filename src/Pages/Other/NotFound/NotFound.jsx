import React from 'react'
import './NotFound.css'
import { Navigate, useNavigate } from 'react-router-dom'

function NotFound() {
	const navigate = useNavigate()
	React.useEffect(() => {
		const timer = setTimeout(() => {
			return navigate('/main')
		}, 3000)
		return () => clearTimeout(timer)
	}, [])
	return (
		<div className='NotFound'>
			<div className='NotFound-content'>
				<p id='nf-error'>404</p>
				<p id='nf-text' style={{ color: 'red' }}>
					Вы попали на несуществующую страницу.
				</p>
				<p id='nf-text' style={{ color: 'red' }}>
					Вероятно, это произошло из-за опечатки или неправильной раскладки
					клавиатуры.
				</p>
				<p id='nf-text'>Переадресация через 5 секунд...</p>
			</div>
		</div>
	)
}

export default NotFound
