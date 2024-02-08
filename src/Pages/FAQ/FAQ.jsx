import React from 'react'
import './FAQ.css'

const faqCatalog = [
	{
		question: 'Что такое Uchu.ru, и для чего он нужен?',
		answer:
			'<b>Uchu.ru</b> - это уникальный сервис, созданный для учеников 9-11 классов. Сервис помогает готовиться к глобальным экзаменам, таким как КЕГЭ и КОГЭ. Сайт очень удобен, так как здесь вы можете найти эмулятор для запуска вариантов ЕГЭ и ОГЭ по информатике.',
	},
	{
		question: 'Зачем нужен эмулятор и как им пользоваться?',
		answer:
			'Эмулятор очень удобен для решения вариантов, так как очень схож с проведением КЕГЭ на реальном экзамене, что даёт ученику подготовится к реальным сложностям КЕГЭ и КОГЭ.',
	},
	{
		question: 'Как правильно пользоваться разделами "Практика" и "Теория"?',
		answer:
			'Каждый ученик может пользоваться этими разделами индивидуально, но мы можем дать пару советов как лучше это использовать. <b>Советы:</b> <br />Совет 1:',
	},
	{
		question: 'Как сменить почту?',
		answer: 'Изменение почты не предусмотрено, ее изменить невозможно',
	},
	{
		question: 'Как сменить пароль?',
		answer:
			'Изменить пароль можно в настройках (справа сверху на ваш профиль, далее нажмите на "Настройки").',
	},
	{
		question: 'Как изменить ФИО?',
		answer: 'Изменение ФИО также не предусмотрено, изменить невозможно',
	},
	{
		question: 'Что делать, если нашёл ошибку?',
		answer:
			'Если вы нашли ошибку, вы можете написать нам прямо на почту <b>khanzele16@gmail.com</b>',
	},
	{
		question: 'Как удалить аккаунт?',
		answer: 'Не заходите в течение года, удалится автоматически.',
	},
]

function FAQ() {
	const [isAnswer, setIsAnswer] = React.useState()
	return (
		<nav className='FAQ'>
			<ul className='FAQ-content'>
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
								src='https://i.ibb.co/bs7V7NB/arrow-down-sign-to-navigate.png'
								alt=''
							/>
						</div>
						<div className='FAQ-answer'>
							<p dangerouslySetInnerHTML={{ __html: el.answer }}></p>
						</div>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default FAQ
