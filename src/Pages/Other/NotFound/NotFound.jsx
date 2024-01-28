import React from 'react'
import './NotFound.css'

function NotFound() {
	return (
		<div className='NotFound'>
			<div className='NotFound-content'>
				<p id='nf-error'>404</p>
				<p id='nf-text'>Этой страницы не существует...</p>
			</div>
		</div>
	)
}

export default NotFound
