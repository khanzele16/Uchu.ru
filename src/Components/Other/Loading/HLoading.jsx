import React from 'react'
import ContentLoader from 'react-content-loader'

const HLoading = () => (
	<ContentLoader
		speed={2}
		width={230}
		height={60}
		viewBox='0 0 230 60'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
	>
		<rect x='55' y='18' rx='3' ry='3' width='170' height='8' />
		<rect x='55' y='35' rx='3' ry='3' width='80' height='8' />
		<circle cx='28' cy='30' r='20' />
	</ContentLoader>
)

export default HLoading
