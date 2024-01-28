import React from 'react'
import './FAQ.css'

const faqCatalog = [
	{
		question: 'Что такое Uchu.ru, и для чего он нужен?',
		answer:
			'Uchu.ru - это уникальный сервис, созданный для учеников 9-11 классов. Сервис помогает готовиться к глобальным экзаменам, таким как КЕГЭ и КОГЭ. Сайт очень удобен, так как здесь вы можете найти эмулятор для запуска вариантов ЕГЭ и ОГЭ по информатике',
	},
	{
		question: 'Зачем нужен эмулятор и как им пользоваться?',
		answer:
			'Эмулятор очень удобен для решения вариантов, так как очень схож с проведением КЕГЭ на реальном экзамене, что даёт ученику подготовится к реальным сложностям КЕГЭ и КОГЭ',
	},
]

function FAQ() {
	const [isAnswer, setIsAnswer] = React.useState()
	return (
		<nav className='FAQ'>
			{faqCatalog.map((el, index) => (
				<li
					onClick={() =>
						isAnswer == index ? setIsAnswer('..') : setIsAnswer(index)
					}
					className={isAnswer == index ? 'active' : ''}
					key={index}
				>
					<div className='FAQ-question'>
						<p>{el.question}</p>
						<img
							src='https://cdn-icons-png.flaticon.com/512/5842/5842712.png'
							alt=''
						/>
					</div>
					<div className='FAQ-answer'>
						<p>{el.answer}</p>
					</div>
				</li>
			))}
		</nav>
	)
}

export default FAQ
