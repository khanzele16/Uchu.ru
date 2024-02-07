import React from 'react'
import { theoryExercise } from '../../../../Pages/Exercise/Theory/Theory'
import './FETPost.css'

function FETPost() {
	const exerciseId = window.location.pathname.split('/')[2]
	const element = theoryExercise[exerciseId - 1]

	return (
		<div className='FETPost'>
			<div className='FETPost-content'>
				<div className='FETPost-content-title'>
					<h2>{element.title}</h2>
				</div>
				<div className='FETPost-content-text'>
					<p dangerouslySetInnerHTML={{ __html: element.text }}></p>
				</div>
				<div className='FETPost-content-video'>
					<div className='FETPost-content-video-title'>
						<h4>Полезные материалы:</h4>
					</div>
					<ul className='FETPost-content-video-catalog'>
						{element.video.map((el, index) => (
							<li key={index}>
								<iframe
									width='560'
									height='315'
									src={`https://www.youtube.com/embed/${el}`}
									title='YouTube video player'
									frameborder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
									allowfullscreen
								></iframe>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default FETPost
