import React from 'react'
import './Stats.css'
import STable from '../../../Components/STable/STable'
import { useDispatch, useSelector } from 'react-redux'
import { getResults } from '../../../Redux/Slices/exerciseSlice'
import ContentLoader from 'react-content-loader'

function Stats() {
	const dispatch = useDispatch()
	const result = useSelector(state => state.exercise.results.data)
  const status = useSelector(state => state.exercise.results.status)
	React.useEffect(() => {
		dispatch(getResults())
	}, [])
	return (
		<div className='Stats'>
			<div className='Stats-content'>
				<div className='Stats-content-title'>
					<h2>Статистика</h2>
				</div>
				<div
					id={result ? 'with-results' : 'without-results'}
					className='Stats-content-info'
				>
					<p>
						{status == 'loading' ? (
							<ContentLoader
								speed={2}
								width={1450}
								height={835}
								viewBox='0 0 1500 835'
								backgroundColor='#f3f3f3'
								foregroundColor='#ecebeb'
							>
								<rect x='0' y='0' width='1500' height='835' />
							</ContentLoader>
						) : result ? (
							<STable />
						) : (
							'Статистики нет...'
						)}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Stats
