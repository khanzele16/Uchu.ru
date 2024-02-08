import React from 'react'
import SPost from './SPost/SPost'
import { useDispatch, useSelector } from 'react-redux'
import { getResults } from '../../Redux/Slices/exerciseSlice'

function STable() {
	const dispatch = useDispatch()
	const results = useSelector(state => state.exercise.results?.data)
	console.log()
	return (
		<table
			style={{
				width: '100%',
				borderCollapse: 'collapse',
				borderSpacing: '0',
				height: 'auto',
			}}
			className='STable'
		>
			<tbody>
				<tr>
					<td
						style={{
							fontFamily: 'Montserrat',
							color: 'black',
							border: '1px solid #595959',
							width: '150px',
							height: '40px',
							textAlign: 'center',
						}}
					>
						ID
					</td>
					<td
						style={{
							fontFamily: 'Montserrat',
							color: 'black',
							border: '1px solid #595959',
							width: '250px',
							height: '40px',
							textAlign: 'center',
						}}
					>
						Дата
					</td>
					<td
						style={{
							fontFamily: 'Montserrat',
							color: 'black',
							border: '1px solid #595959',
							width: '250px',
							height: '40px',
							textAlign: 'center',
						}}
					>
						Результат
					</td>
					<td
						style={{
							fontFamily: 'Montserrat',
							color: 'black',
							border: '1px solid #595959',
							width: '300px',
							height: '40px',
							textAlign: 'center',
						}}
					>
						Ответ
					</td>
				</tr>
				{results.exercise.map((el, index) => (
					<SPost {...el} key={index} />
				))}
			</tbody>
		</table>
	)
}

export default STable
