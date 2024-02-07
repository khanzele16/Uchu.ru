import React from 'react'
import './Main.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../Redux/Slices/postsSlice'
import PLoading from '../../Components/Other/Loading/PLoading'
import { NavLink } from 'react-router-dom'
import Post from '../../Components/Post/Post'
import { exerciseCatalog } from '../Exercise/Practice/Practice'
import EPPost from '../../Components/Exercise/Practice/EPPost/EPPost'
import ETPost from '../../Components/Exercise/Theory/ETPost/ETPost'
import { theoryExercise } from '../Exercise/Theory/Theory'

const loadingArray = [...new Array(3)]
const answerArray = [
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
			'Каждый может использовать эти разделы на своё усмотрение и подготовка может быть индивидуальной, но мы можем дать пару советов.',
	},
]

function Main() {
	const { postsData, status } = useSelector(state => state.posts.posts)
	const [isAnswer, setIsAnswer] = React.useState()
	const dispatch = useDispatch()
	React.useEffect(() => {
		dispatch(fetchPosts())
	}, [])

	return (
		<nav className='Main'>
			<div className='Main-header'>
				<div className='Main-header-title'>
					<h2>Удобная платформа для современного школьника</h2>
					<p>
						Uchu.ru является одной из лучших платформ для учащихся 9-11 классов.
						На данном сайте предоставлен интерфейс, помогающий детям получать
						теорию, практиковаться и выполнять домашнюю работу.
					</p>
					<img
						src='https://i.ibb.co/bs7V7NB/arrow-down-sign-to-navigate.png'
						alt=''
					/>
				</div>
			</div>
			<div className='Main-variants'>
				<div className='Main-variants-content'>
					<div className='Main-variants-content-title'>
						<p id='variants-mini-title'>Практика</p>
						<h3 id='variants-title'>Решайте задания</h3>
						<p id='variants-text-title'>Удобный интерфейс для решения задач</p>
					</div>
					<div className='Main-variants-content-exercise'>
						<ul className='Main-variants-content-exercise-catalog'>
							{exerciseCatalog.map((el, index) => (
								<NavLink key={index} to={`./${el.path}`}>
									<li>
										<EPPost {...el} view='main' />
									</li>
								</NavLink>
							))}
							<NavLink to='/practice'>
								<li>
									<EPPost view='main' button='next' />
								</li>
							</NavLink>
						</ul>
					</div>
				</div>
			</div>
			<div className='Main-theory'>
				<div className='Main-theory-content'>
					<div className='Main-theory-content-title'>
						<p id='theory-mini-title'>Теория</p>
						<h3 id='theory-title'>Изучайте задания</h3>
						<p id='theory-text-title'>
							Понятное объяснение того, как решать задачи
						</p>
					</div>
					<div className='Main-theory-content-exercise'>
						<ul className='Main-theory-content-exercise-catalog'>
							{theoryExercise.map((el, index) => (
								<NavLink key={index} to={`./${el.path}`}>
									<li>
										<ETPost {...el} view='main' />
									</li>
								</NavLink>
							))}
							<NavLink to='/theory'>
								<li>
									<ETPost type='None' view='main' button='next' />
								</li>
							</NavLink>
						</ul>
					</div>
				</div>
			</div>
			<div className='Main-news'>
				<div className='Main-news-content'>
					<div className='Main-news-content-title'>
						<p id='news-mini-title'>Информация</p>
						<h3 id='news-title'>Наши посты</h3>
						<p id='news-text-title'>
							Постоянно обновляющийся контент для пользователей сайта будет
							приятным бонусом
						</p>
					</div>
					<ul className='Main-news-content-catalog'>
						{status == 'loading' ? (
							loadingArray.map((el, index) => (
								<li key={index}>
									<PLoading />
								</li>
							))
						) : status == 'loaded' ? (
							postsData.map((el, index) => (
								<NavLink to={'/news/' + el._id} key={index}>
									<li className='mini-post-content'>
										<Post element={el} />
									</li>
								</NavLink>
							))
						) : (
							<div className='mini-error-content'>
								<img
									src='https://media1.tenor.com/m/TUJ_WGkQ6pcAAAAC/dog-computer.gif'
									alt=''
								/>
								<p>Не удалось загрузить посты</p>
							</div>
						)}
					</ul>
				</div>
			</div>
			<div className='Main-faq'>
				<div className='Main-faq-content'>
					<div className='Main-faq-content-title'>
						<p id='faq-mini-title'>О нас</p>
						<h3 id='faq-title'>Остались вопросы?</h3>
						<p id='faq-text-title'>
							Открывайте вкладки, чтобы прочитать информацию
						</p>
					</div>
					<div className='Main-faq-content-main'>
						<ul className='Main-faq-content-catalog'>
							{answerArray.map((el, index) => (
								<li
									onClick={() =>
										isAnswer == index ? setIsAnswer('..') : setIsAnswer(index)
									}
									className={isAnswer == index ? 'active-main' : ''}
									key={index}
								>
									<div className='Main-faq-question'>
										<p>{el.question}</p>
										<p id='faq-label'>{isAnswer == index ? '-' : '+'}</p>
									</div>
									<div className='Main-faq-answer'>
										<p dangerouslySetInnerHTML={{ __html: el.answer }}></p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Main
