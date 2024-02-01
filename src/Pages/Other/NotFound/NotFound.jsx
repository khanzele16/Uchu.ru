import React from 'react'
import './NotFound.css'
import { Navigate } from 'react-router-dom'

function NotFound() {
	React.useEffect(() => {
		const timer = setTimeout(() => {
			return <Navigate to='/kege' />
		}, 1000)
		return () => clearTimeout(timer)
	}, [])
	return (
		<div className='NotFound'>
			<div className='NotFound-content'>
					<p id='nf-error'>404</p>
				<p id='nf-text'>Вы попали на несуществующую страницу.</p>
				<p id='nf-text'>
					Вероятно, это произошло из-за опечатки или неправильной раскладки
					клавиатуры.
				</p>
			</div>
		</div>
	)
}

export default NotFound
