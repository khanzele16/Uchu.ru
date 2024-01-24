import App from './App'
import React from 'react'
import store from './Redux/store'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import Emulator from './Components/Emulator/Emulator'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path='/*' element={<App />} />
				<Route path='/emulator/*' element={<Emulator />} />
			</Routes>
		</BrowserRouter>
	</Provider>
)

reportWebVitals()
