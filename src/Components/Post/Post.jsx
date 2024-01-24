import React from 'react'
import moment from 'moment/min/moment-with-locales.min.js'
import './Post.css'

function Post({ element }) {
	
	return (
		<>
			<img id='mini-post-image' src={element.imageUrl} alt='' />
			<div className='Post-info'>
				<p id='mini-post-title'>
					{element.title.length >= 35
						? element.title.split('').splice(0, 32).join('') + '...'
						: element.title}
				</p>
				<p id='mini-post-date'>{moment(element.createdAt).locale('ru').format('DD MMMM, HH:mm')}</p>
			</div>
		</>
	)
}

export default Post
