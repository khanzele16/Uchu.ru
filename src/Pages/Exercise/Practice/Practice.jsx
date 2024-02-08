import React from 'react'
import { NavLink } from 'react-router-dom'
import './Practice.css'
import EPPost from '../../../Components/Exercise/Practice/EPPost/EPPost'

const catalogVariants = [{ _id: '4141423412451' }, ...new Array(17)]
export const exerciseCatalog = [
	{
		title: 'Задание 1 (Графы)',
		exercise: [
			{
				id: '1001',
				text: 'На рисунке справа схема дорог Н-ского района изображена в виде графа, в таблице содержатся сведения о дорогах между населенными пунктами (звездочка означает, что дорога между соответствующими городами есть).</p><div style="display: flex;align-items: center; justify-content: space-evenly; align-content: center; width: 500px; margin: 0 auto"><table style="border: 1px solid black; border-collapse: collapse;"><tbody><tr><td style="border: 1px solid black; border-collapse: collapse;text-align:center" width="25"></td><td style="border: 1px solid black; border-collapse: collapse;text-align:center" width="25">1</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center" width="25">2</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center" width="25">3</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center">4</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center" width="25">5</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center" width="25">6</td></tr><tr><td style="border: 1px solid black; border-collapse: collapse;text-align:center">1</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center;background-color:#B3B3B3"></td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"><b>* </b></td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"></td><td style="border: 1px solid black; border-collapse: collapse;text-align:center" width="25"><b>* </b></td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"></td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"></td></tr><tr><td style="border: 1px solid black; border-collapse: collapse;text-align:center" width="25">2</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"><b>*</b> </td><td style="border: 1px solid black; border-collapse: collapse;text-align:center;background-color:#B3B3B3"></td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"></td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"><b>*</b> </td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"></td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"><b>*</b> </td></tr><tr><td style="border: 1px solid black; border-collapse: collapse;text-align:center">3</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"></td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"></td><td style="border: 1px solid black; border-collapse: collapse;text-align:center;background-color:#B3B3B3"></td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"><b>*</b> </td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"><b>* </b></td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"></td></tr><tr><td style="border: 1px solid black; border-collapse: collapse;text-align:center">4</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"><b>*</b></td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"><b>*</b> </td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"><b>* </b></td><td style="border: 1px solid black; border-collapse: collapse;text-align:center;background-color:#B3B3B3"></td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"><b>*</b> </td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"><b>* </b></td></tr><tr><td style="border: 1px solid black; border-collapse: collapse;text-align:center">5</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"></td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"></td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"><b>*</b> </td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"><b>*</b> </td><td style="border: 1px solid black; border-collapse: collapse;text-align:center;background-color:#B3B3B3"></td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"></td></tr><tr><td style="border: 1px solid black; border-collapse: collapse;text-align:center">6</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"></td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"><b>* </b></td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"></td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"><b>* </b></td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"></td><td style="border: 1px solid black; border-collapse: collapse;text-align:center;background-color:#B3B3B3"></td></tr></tbody></table><img src="https://i.ibb.co/Qrjx34x/2.png" style="margin:10px;max-width:120px"></div><p class="left_margin">Так как таблицу и схему рисовали независимо друг от друга, то нумерация населённых пунктов в таблице никак не связана с буквенными обозначениями на графе. Определите номера населенных пунктов A и G в таблице. В ответе     запишите числа в порядке возрастания без разделителей.',
				answer: '35',
				describe:
					'Сопоставим населённые пункты графа и населённые пункты в таблице. Нам необходимо определить номера населенных пунктов A и G. Из В ведут пять дорог. Таким образом, В  — 4. Проверим первый пункт: из первого пункта есть дорога во второй, а из второго есть путь в три пункта. Получается, что D  — 2. Следовательно, 1, 2 и 6 номера не подходят. Остаются два населенных пункта 3 и 5. Это и есть ответ. Записываем ответ в порядке возрастания без разделителей.<br /><br/>Ответ: 35',
			},
		],
		path: '1',
	},
	{
		title: 'Задание 2 (Таблица истинности логического выражения)',
		exercise: [
			{
				id: '1005',
				text: '<div align="justify" width="100%" id="body939013" class="pbody"><p class="left_margin">Ло­ги­че­ская функ­ция <i>F</i> задаётся вы­ра­же­ни­ем  (<i>x</i> ≡ <i>z</i> ) ∨ (<i>x</i> → (<i>y</i> ∧ <i>z</i>)).</p><p class="left_margin">Дан ча­стич­но за­пол­нен­ный фраг­мент, со­дер­жа­щий <b>не­по­вто­ря­ю­щи­е­ся</b> стро­ки таб­ли­цы ис­тин­но­сти функ­ции <i>F</i>.</p><p class="left_margin">Опре­де­ли­те, ка­ко­му столб­цу таб­ли­цы ис­тин­но­сти со­от­вет­ству­ет каж­дая из пе­ре­мен­ных <i>x</i>, <i>y</i>, <i>z</i>.</p><p>&nbsp;</p><p></p><p></p><p></p><p></p><div class="wrap_scroll_table"><table style="border: 1px solid black; border-collapse: collapse;margin:auto"><tbody><tr><th style="border: 1px solid black; border-collapse: collapse;text-align:center">Пе­ре­мен­ная 1</th><th style="border: 1px solid black; border-collapse: collapse;text-align:center">Пе­ре­мен­ная 2</th><th style="border: 1px solid black; border-collapse: collapse;text-align:center">Пе­ре­мен­ная 3</th><th style="border: 1px solid black; border-collapse: collapse;text-align:center">Функ­ция</th></tr><tr><td style="border: 1px solid black; border-collapse: collapse;text-align:center">???</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center">???</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center">???</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"><i>F</i></td></tr><tr><td style="border: 1px solid black; border-collapse: collapse;text-align:center">0</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center">0</td><td style="text-align:center"></td><td style="border: 1px solid black; border-collapse: collapse;text-align:center">0</td></tr><tr><td style="border: 1px solid black; border-collapse: collapse;text-align:center">1</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"></td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"></td><td style="border: 1px solid black; border-collapse: collapse;text-align:center">0</td></tr></tbody></table></div><p>&nbsp;</p><p class="left_margin">В от­ве­те на­пи­ши­те буквы <i>x</i>, <i>y</i>, <i>z</i> в том по­ряд­ке, в ко­то­ром идут со­от­вет­ству­ю­щие им столб­цы (сна­ча­ла  — буква, со­от­вет­ству­ю­щая пер­во­му столб­цу; затем  — буква, со­от­вет­ству­ю­щая вто­ро­му столб­цу, и т. д.). Буквы в от­ве­те пи­ши­те под­ряд, ни­ка­ких раз­де­ли­те­лей между бук­ва­ми ста­вить не нужно.</p><p class="left_margin">При­мер. Пусть за­да­но вы­ра­же­ние <i>x</i> → <i>y</i>, за­ви­ся­щее от двух пе­ре­мен­ных <i>x</i> и <i>y</i>, и фраг­мент таб­ли­цы ис­тин­но­сти:</p><p>&nbsp;</p><p></p><p></p><div class="wrap_scroll_table"><table style="margin:auto"><tbody><tr><th style="border: 1px solid black; border-collapse: collapse;text-align:center">Пе­ре­мен­ная 1</th><th style="border: 1px solid black; border-collapse: collapse;text-align:center">Пе­ре­мен­ная 2</th><th style="border: 1px solid black; border-collapse: collapse;text-align:center">Функ­ция</th></tr><tr><td style="border: 1px solid black; border-collapse: collapse;text-align:center">???</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center">???</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center"><i>F</i></td></tr><tr><td style="border: 1px solid black; border-collapse: collapse;text-align:center">0</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center">1</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center">0</td></tr></tbody></table></div><p>&nbsp;</p><p class="left_margin">Тогда пер­во­му столб­цу со­от­вет­ству­ет пе­ре­мен­ная <i>y</i>, а вто­ро­му столб­цу со­от­вет­ству­ет пе­ре­мен­ная <i>x</i>. В от­ве­те нужно на­пи­сать: <i>yx</i>.</p></div>',
				answer: 'yzx',
				describe:
					'Данная импликация принимает значение 0 тогда и только тогда, когда<br /><img src="https://ege.sdamgia.ru/formula/svg/ac/ac14d6c32174318828995c80f0f93f83.svg" class="tex" style="vertical-align:-21.0pt" alt=" си­сте­ма вы­ра­же­ний  новая стро­ка y умно­жить на z=0,  новая стро­ка x не равно z,  новая стро­ка x не равно 0. конец си­сте­мы . левая круг­лая скоб­ка * пра­вая круг­лая скоб­ка "><br />Пусть  Исходя из системы (*),  тогда  В первой строке нет единицы, значит, переменная x находится в третьем столбце. Тогда первая строка имеет вид 0 0 1. Вторая строка должна отличаться от первой, поэтому она имеет вид 1 0 1. Рассмотрим два варианта:<br /><center><p></p><table style="border: 1px solid black; border-collapse: collapse;margin:auto;border:none;display:inline; margin-right:150px"><tbody><tr><td style="border: 1px solid black; border-collapse: collapse;text-align:center">y</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center">z</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center">x</td></tr><tr><td style="border: 1px solid black; border-collapse: collapse;text-align:center">0</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center">0</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center">1</td></tr><tr><td style="border: 1px solid black; border-collapse: collapse;text-align:center">1</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center">0</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center">1</td></tr></tbody></table> <table style="margin:auto;border:none;display:inline"><tbody><tr><td style="border: 1px solid black; border-collapse: collapse;text-align:center">z</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center">y</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center">x</td></tr><tr><td style="border: 1px solid black; border-collapse: collapse;text-align:center">0</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center">0</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center">1</td></tr><tr><td style="border: 1px solid black; border-collapse: collapse;text-align:center">1</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center">0</td><td style="border: 1px solid black; border-collapse: collapse;text-align:center">1</td></tr></tbody></table><p class="left_margin"></p></center>Ответ: yzx.',
			},
		],
		path: '2',
	},
	{
		title: 'Задание 3 (Поиск информации в связанных таблицах)',
		exercise: [],
		path: '3',
	},
	{
		title: 'Задание 4 (Неравномерное кодирование информации)',
		exercise: [],
		path: '4',
	},
	{
		title: 'Задание 5 (Анализ и построение алгоритма обработки числа)',
		exercise: [],
		path: '5',
	},
	{
		title: 'Задание 6 (Анализ циклического алгоритма)',
		exercise: [],
		path: '6',
	},
	{
		title:
			'Задание 7 (Равномерное кодирование графической и звуковой информации)',
		exercise: [],
		path: '7',
	},
	{
		title: 'Задание 8 (Комбинаторика)',
		exercise: [],
		path: '8',
	},
	{
		title: 'Задание 9 (Обработка числовой информации в электронных таблицах)',
		exercise: [],
		path: '9',
	},
	{
		title: 'Задание 10 (Обработка числовой информации в электронных таблицах)',
		exercise: [],
		path: '10',
	},
]

function Practice() {
	return (
		<div className='Practice'>
			<nav className='Practice-content'>
				<div className='Practice-content-exercise'>
					<div className='Practice-content-exercise-title'>
						<h2>КЕГЭ: Задания</h2>
					</div>
					<ul className='Practice-content-exercise-catalog'>
						{exerciseCatalog.map((el, index) => (
							<NavLink key={index} to={`./${el.path}`}>
								<li>
									<EPPost {...el} />
								</li>
							</NavLink>
						))}
					</ul>
				</div>
				<div className='Practice-content-KEGE'>
					<div className='Practice-content-KEGE-title'>
						<h2>КЕГЭ: Варианты</h2>
					</div>
					<ul className='Practice-content-KEGE-variants'>
						{catalogVariants.map((el, index) => (
							<NavLink key={index} to={`/emulator/${el?._id}`}>
								<li>{`${index + 1} вариант`}</li>
							</NavLink>
						))}
					</ul>
					<div className='Practice-content-KEGE-text'>
						<p>
							Компьютерный единый государственный экзамен (КЕГЭ) и компьютерный
							общий государственный экзамен (КОГЭ) — это та же государственная
							аттестация, только проводится на компьютерах.
							<br />
							<br /> В этом году в Москве 11-ые классы сдают по-прежнему на
							компьютерах только информатику, а вот у 9-ых, кроме информатики, в
							такой форме сдается также физика, иностранный язык и география, в
							том случае если были выбраны для сдачи эти предметы. Правила сдачи
							экзаменов не меняются, только вместо бумажных бланков ученики
							будут работать за партами на компьютерах.
							<br />
							<br />
							<b>А что, если:</b>
							<br />• Ребенок растеряется и не поймет, как выполнять работу на
							компьютере?
							<br /> — Организаторы в аудиториях подскажут все технические
							нюансы. Кроме того, на каждой парте есть инструкция с
							объяснениями.
							<br /> • Задания будут другими?
							<br /> — Нет, задания на КЕГЭ/КОГЭ те же самые, только не на
							бумаге, а на экране.
							<br /> • Ребенок не сможет выполнить задания, если ему сложно
							работать на компьютере? <br />— У него будет возможность читать
							задания с экрана, но развернутые ответы писать на бумаге.
							<br />
							<br />
							<span id='red-text'>Примечание:</span>
							<br /> Чтобы использовать эмулятор Uchu.ru вам нужно нажать на
							номер варианта, и, следуя инструкции, выполнять требования. Далее
							вам будет доступен вариант. Позже, когда вы закончите, вы должны
							будете нажать на "Закончить досрочно", после чего перед вами
							появятся ваши результаты. <b>Удачи!</b>
						</p>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Practice
