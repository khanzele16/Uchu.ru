import React from 'react'
import './Emulator.css'

function Emulator() {
	const variantNumber = window.location.pathname.split('/')[2]
	return (
		<nav className='Emulator'>
			<header className='Emulator-header'>
				<div className='Emulator-header-title'>
					<h1>
						Uchu<span>.</span>ru
					</h1>
				</div>
				<div className='Emulator-header-menu'>
					<p>Вариант №{variantNumber}</p>
					<button>Закончить досрочно</button>
				</div>
			</header>
			<div className='Emulator-content'>
				<div className='Emulator-content-sidebar'></div>
				<div className='Emulator-content-main'></div>
			</div>
		</nav>
	)
}

export default Emulator
