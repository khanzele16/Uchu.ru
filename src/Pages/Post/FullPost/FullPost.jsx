import React from 'react'
import moment from 'moment/min/moment-with-locales.min.js'
import FullPLoading from '../../../Components/Other/Loading/FullPLoading'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../../../Redux/Slices/postsSlice'
import './FullPost.css'

function FullPost() {
	const postId = window.location.pathname.split('/')[2]
	const { postData, status } = useSelector(state => state.posts.post)
	const dispatch = useDispatch()
	React.useEffect(() => {
		dispatch(fetchPost(postId))
	}, [])
	return (
		<div className='FullPost'>
			{status == 'loading' ? (
				<FullPLoading />
			) : !(postData.length == 0) ? (
				<>
					<div className='FullPost-content'>
						<div className='FullPost-content-info'>
							<h2>{postData.title}</h2>
							<p>
								{moment(postData.createdAt)
									.locale('ru')
									.format('dddd, DD MMMM YYYY год в HH:mm:ss')}
							</p>
						</div>
						<div className='FullPost-content-image'>
							<img src={postData.imageUrl} alt='' />
						</div>
						<div className='FullPost-content-text'>
							<p>{postData.text}</p>
						</div>
					</div>
				</>
			) : (
				<div className='FullPost-content-not'>
					<p id='fpost-error'>404</p>
					<p>К сожалению пост не был найден...</p>
				</div>
			)}
		</div>
	)
}

export default FullPost
