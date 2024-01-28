import React from 'react'
import ContentLoader from 'react-content-loader'

const FullPLoading = () => (
	<ContentLoader
		speed={2}
		width={1500}
		height={770}
		viewBox='0 0 1500 770'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
	>
		<rect x='10' y='20' rx='5' ry='5' width='1400' height='30' />
		<rect x='10' y='70' rx='5' ry='5' width='200' height='20' />
		<rect x='300' y='110' rx='0' ry='0' width='908' height='500' />
		<rect x='10' y='650' rx='0' ry='0' width='1400' height='105' />
	</ContentLoader>
)

export default FullPLoading
