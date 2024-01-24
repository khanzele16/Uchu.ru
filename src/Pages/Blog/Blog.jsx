import React from 'react'
import Post from '../../Components/Post/Post'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../../Redux/Slices/postsSlice'
import './Blog.css'
import PLoading from '../../Components/Loading/PLoading'

const loadingArray = [...new Array(6)]

function Blog() {
	const { postsData, status } = useSelector(state => state.posts.posts)
	const dispatch = useDispatch()
	React.useEffect(() => {
		dispatch(fetchPosts())
	}, [])

	return (
		<div className='Blog'>
			<nav className='Blog-content'>
				<div className='Blog-content-title'>
					<h2>Наш Блог</h2>
				</div>
				<ul className='Blog-content-catalog'>
					{status == 'loading'
						? loadingArray.map((el, index) => (
								<li key={index}>
									<PLoading />
								</li>
						  ))
						: postsData.map((el, index) => (
								<NavLink to={'/blog/' + el._id} key={index}>
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

export default Blog
