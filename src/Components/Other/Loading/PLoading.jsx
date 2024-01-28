import React from 'react'
import ContentLoader from 'react-content-loader'

const PLoading = () => (
	<ContentLoader
		speed={2}
		width={410}
		height={308}
		viewBox='0 0 410 308'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
	>
		<rect x='0' y='0' rx='10' ry='10' width='410' height='308' />
	</ContentLoader>
)

export default PLoading