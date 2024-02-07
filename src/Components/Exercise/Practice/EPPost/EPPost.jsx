import React from 'react'
import './EPPost.css'

function EPPost({ button, view, ...el }) {
	return (
		<div id={view == 'main' ? 'EPPost-main' : 'EPPost'} className='EPPost'>
			<div className='EPPost-content'>
				<div className='EPPost-content-title'>
					<p>{button == 'next' ? 'Далее...' : el.title}</p>
				</div>
			</div>
			<img src='https://i.ibb.co/0tX4V6T/next.png' alt='' />
		</div>
	)
}

export default EPPost
