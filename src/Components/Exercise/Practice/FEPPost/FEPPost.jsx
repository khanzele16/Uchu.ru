import React from 'react'
import Task from './Task/Task'
import { exerciseCatalog } from '../../../../Pages/Exercise/Practice/Practice'
import './FEPPost.css'
import { useDispatch, useSelector } from 'react-redux'
import { getResults } from '../../../../Redux/Slices/exerciseSlice'
function FEPPost() {
	const exerciseId = window.location.pathname.split('/')[2]
	const element = exerciseCatalog[exerciseId - 1]
	const dispatch = useDispatch()
	React.useEffect(() => {
		dispatch(getResults())
	}, [])
	return (
		<div className='FEPPost'>
			<div className='FEPPost-content'>
				<div className='FEPPost-content-title'>
					<h2>{element.title}</h2>
				</div>
				<ul className='FEPPost-content-exercise'>
					{element.exercise.map((el, index) => (
						<li key={index}>
							<Task {...el} />
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default FEPPost
