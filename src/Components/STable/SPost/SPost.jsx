import React from 'react'
import moment from 'moment/min/moment-with-locales.min.js'

function SPost({ ...el }) {
	return (
		<tr className='SPost'>
			<td
				style={{
					fontFamily: 'Mulish',
					color: 'black',
					border: '1px solid #595959',
					width: '300px',
					height: '40px',
					textAlign: 'center',
					fontSize: '20px',
				}}
			>
				{el.id}
			</td>
			<td
				style={{
					fontFamily: 'Mulish',
					color: 'black',
					border: '1px solid #595959',
					width: '300px',
					height: '40px',
					textAlign: 'center',
					fontSize: '20px',
				}}
			>
				{moment(el.createdAt).locale('ru').format('DD MMMM, HH:mm')}
			</td>
			<td
				style={{
					backgroundColor: el.result == 'right' ? '#32CD32' : 'red',
					fontFamily: 'Mulish',
					color: 'white',
					border: '1px solid #595959',
					width: '300px',
					height: '40px',
					textAlign: 'center',
					fontSize: '20px',
				}}
			>
				{el.result == 'right' ? 'Правильно' : 'Неправильно'}
			</td>
			<td
				style={{
					fontFamily: 'Mulish',
					color: 'black',
					border: '1px solid #595959',
					width: '300px',
					height: '40px',
					textAlign: 'center',
					fontSize: '20px',
				}}
			>
				{el.answer}
			</td>
		</tr>
	)
}

export default SPost
