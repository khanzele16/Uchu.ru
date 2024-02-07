import React from 'react'
import Post from '../../../Components/Post/Post'
import PLoading from '../../../Components/Other/Loading/PLoading'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../../../Redux/Slices/postsSlice'
import './News.css'

const loadingArray = [...new Array(9)]

function News() {
	const { postsData, status } = useSelector(state => state.posts.posts)
	const dispatch = useDispatch()
	React.useEffect(() => {
		dispatch(fetchPosts())
	}, [])

	return (
		<div className='News'>
			<nav className='News-content'>
				<div className='News-content-title'>
					<h2>Новости</h2>
				</div>
				{status == 'error' && (
					<div className='News-content-error'>
						<img
							src='https://media1.tenor.com/m/TUJ_WGkQ6pcAAAAC/dog-computer.gif'
							alt=''
						/>
						<p>
							Произошла какая-то ошибка, попробуйте загрузить эту страницу чуть
							позже...
						</p>
					</div>
				)}
				<ul className='News-content-catalog'>
					{status == 'loading'
						? loadingArray.map((el, index) => (
								<li key={index}>
									<PLoading />
								</li>
						  ))
						: postsData.map((el, index) => (
								<NavLink to={'/news/' + el._id} key={index}>
									<li className='mini-post-content'>
										<Post element={el} />
									</li>
								</NavLink>
						  ))}
				</ul>
			</nav>
		</div>
	)
}

export default News
