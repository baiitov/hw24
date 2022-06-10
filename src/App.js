import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import List from './components/List'
import { useState, useEffect, useInsertionEffect } from 'react'
import { addExpense, deleteExpense } from './redux/actions/action'
import styled from 'styled-components'
import Input from './components/UI/Input'

const Section = styled.section`
	width: 1400px;
	height: 800px;
	background: rgb(0, 251, 255);
	border-radius: 9px;
	margin: 0 auto;
	text-align: center;
`
const H1 = styled.h1`
	margin-top: 0px;
	font-family: Tiro Telugu;
	color: #ffc745;
`
const Forma = styled.form`
	width: 480px;
	height: 250px;
	margin: 0 auto;
	background-color: #004746;
	border: 2px solid #004746;
	border-radius: 7px;
	border: 2px solid #ffc745;
`
const Label = styled.label`
	color: #ffc745;
	font-family: Tiro Telugu;
	margin-right: 190px; ;
`
const Button = styled.button`
	font: inherit;
	color: #ffc745;
	cursor: pointer;
	background-color: white;

	border: none;
	border-radius: 25px;
	padding: 0.5rem 2rem;
	margin-top: 20px;
	margin-right: 190px;

	&:hover :active {
		background-color: #ffe6dc;
	}
	&:disabled {
		background-color: darkgrey;
		color: red;
		cursor: not-allowed;
	}
`
const Actions = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 1rem;
`
function App() {
	const expense = useSelector((state) => state.expense)
	const dispatch = useDispatch()
	const [data, setData] = useState({
		title: '',
		titleIsValid: false,
		price: '',
		priceIsValid: false,
		date: '',
		dateIsValid: false,
	})
	const [isForm, setIsForm] = useState(false)

	const inputHandler = (e) => {
		const value = e.target.value
		setData({
			...data,
			[e.target.name]: value,
		})
	}
	const titleInValid = data.title.trim() !== ''
	const priceInValid = data.price.trim() !== ''
	const dateInValid = data.date.trim() !== ''
	useEffect(() => {
		const timer = setTimeout(() => {
			if (titleInValid && priceInValid && dateInValid) {
				setIsForm(true)
			}
		}, 500)
		return () => {
			clearTimeout(timer)
		}
	}, [titleInValid, priceInValid, dateInValid])

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(addExpense(data))
		if (
			data.title.trim() !== '' &&
			data.date.trim() !== '' &&
			data.price.trim() !== ''
		) {
			setIsForm(false)
		}

		setData({
			title: '',
			price: '',
			date: '',
		})
	}
	const deleteHandler = (id) => {
		dispatch(deleteExpense(id))
	}

	return (
		<Section>
			<H1>Redux Practice</H1>
			<Forma onSubmit={submitHandler}>
				<div className='control'>
					<Label>Title</Label>
					<Input
						id='title'
						value={data.title}
						onChange={inputHandler}
						name='title'
						type='text'
					/>
				</div>
				<div className='control'>
					<Label>Price</Label>
				   
					<Input
						id='price'
						value={data.price}
						onChange={inputHandler}
						name='price'
						type='number'
					/>
				</div>
				<div className='control'>
					<Label>Date</Label>
					<Input
						value={data.date}
						onChange={inputHandler}
						name='date'
						type='date'
						id='date'
					/>
				</div>
				<Actions>
					<Button disabled={!isForm}>add</Button>
				</Actions>
			</Forma>
			<List expense={expense} deleteHandler={deleteHandler} />
		</Section>
	)
}

export default App
