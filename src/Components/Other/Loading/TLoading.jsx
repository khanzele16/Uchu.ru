import React from 'react'
import ContentLoader from 'react-content-loader'

const TLoading = () => (
	<ContentLoader
		speed={2}
		width={1455}
		height={425}
		viewBox='0 0 1455 425'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
	>
		<rect x='55' y='18' rx='3' ry='3' width='170' height='8' />
		<rect x='55' y='35' rx='3' ry='3' width='80' height='8' />
		<circle cx='28' cy='30' r='20' />
		<rect x='0' y='0' rx='0' ry='0' width='1452' height='423' />
	</ContentLoader>
)

export default TLoading
