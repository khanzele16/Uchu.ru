import React from 'react'
import './ETPost.css'

function ETPost({ button, view, ...el }) {
	return (
		<div id={view == 'main' ? 'ETPost-main' : 'ETPost'} className='ETPost'>
			<div className='ETPost-content'>
				<div className='ETPost-content-title'>
					<p>{button == 'next' ? 'Далее...' : el.title}</p>
				</div>
				{el.type == 'None' ? (
					<></>
				) : (
					<div className='ETPost-content-type'>
						<p>{el.type}</p>
					</div>
				)}
			</div>
			<img
				src={
					view == 'main'
						? 'https://i.ibb.co/p0tL8SK/next-1.png'
						: 'https://i.ibb.co/0tX4V6T/next.png'
				}
				alt=''
			/>
		</div>
	)
}

export default ETPost
