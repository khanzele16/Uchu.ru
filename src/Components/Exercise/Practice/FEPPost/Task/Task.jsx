import React from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { selectorAuth } from '../../../../../Redux/Slices/authSlice'
import './Task.css'
import {
	getResult,
	setExercise,
} from '../../../../../Redux/Slices/exerciseSlice'
import ContentLoader from 'react-content-loader'

function Task({ ...el }) {
	const dispatch = useDispatch()
	const isAuth = useSelector(selectorAuth)
	const [textValue, setTextValue] = React.useState('')
	const [isButton, setIsButton] = React.useState(false)
	React.useEffect(() => {
		dispatch(getResult(el.id))
	}, [isButton])
	const result = useSelector(state => state.exercise.result?.data)
	const status = useSelector(state => state.exercise.result.status)
	const [isActive, setIsActive] = React.useState(false)
	const onSubmit = async () => {
		if (isAuth) {
			if (result?.result == 'right') {
				toast.error('Вы уже решали это задание')
			} else {
				await dispatch(
					setExercise({
						id: el.id,
						result: el.answer == textValue ? 'right' : 'bad',
					})
				)
				setIsButton(!isButton)
			}
		} else {
			toast.error(
				'Вы не авторизованы. Для того, чтобы решать задания нужно авторизоваться'
			)
		}
	}
	return (
		<div className='Task'>
			{status == 'loading' ? (
				<ContentLoader
					speed={2}
					width={1450}
					height={40}
					viewBox='0 0 1450 40'
					backgroundColor='#f3f3f3'
					foregroundColor='#ecebeb'
				>
					<rect x='55' y='18' rx='3' ry='3' width='170' height='8' />
					<rect x='55' y='35' rx='3' ry='3' width='80' height='8' />
					<rect x='0' y='0' rx='15' ry='15' width='1447' height='40' />
				</ContentLoader>
			) : (
				<div
					style={
						result?.result == 'right'
							? { backgroundColor: '#32CD32' }
							: result?.result == 'bad'
							? { backgroundColor: 'red' }
							: {}
					}
					className='Task-id'
				>
					<p>№{el.id}</p>
				</div>
			)}
			<div className='Task-content'>
				<div className='Task-content-exercise'>
					<p dangerouslySetInnerHTML={{ __html: el.text }}></p>
				</div>
				<div className='Task-content-form'>
					<div className='Task-content-form-input'>
						<input
							value={textValue}
							onChange={event => setTextValue(event.target.value)}
							type='text'
							placeholder='Введите ответ (число)'
						/>
					</div>
					<div className='Task-content-form-buttons'>
						<button id='task-answer' onClick={() => onSubmit()}>
							Ответить
						</button>
						<button onClick={() => setIsActive(!isActive)} id='task-resh'>
							Решение <img src='https://i.ibb.co/xqVdQp7/down.png' alt='' />
						</button>
					</div>
				</div>
			</div>
			<div
				style={{ display: isActive ? 'flex' : 'none' }}
				className='Task-describe'
			>
				<p dangerouslySetInnerHTML={{ __html: el.describe }}></p>
			</div>
		</div>
	)
}

export default Task
