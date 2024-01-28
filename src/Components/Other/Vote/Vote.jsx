import React from 'react'
import { useDispatch } from 'react-redux'
import { removeVote } from '../../../Redux/Slices/modalSlice'
import './Vote.css'

function Vote() {
	const dispatch = useDispatch()
	return (
		<div className='Vote'>
			<div className='Vote-content'>
				<img
					src='https://cdn-icons-png.flaticon.com/512/5931/5931366.png '
					alt=''
				/>
				<p id='vote-text'>
					Просьба. Мы участвуем в школьном конкурсе, поэтому просим поддержать
					нас. Голос за вами!
				</p>
			</div>
			<img
				onClick={() => dispatch(removeVote())}
				src='https://cdn-icons-png.flaticon.com/512/10308/10308565.png'
				alt=''
			/>
		</div>
	)
}

export default Vote
