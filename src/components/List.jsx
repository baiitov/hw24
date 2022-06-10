import React from 'react'
import styled from 'styled-components'
const Block = styled.div`
	width: 430px;
	max-height: 800px;
	background: #004746;
	margin: 0 auto;
	border-radius: 9px;
	border: 2px solid #ffc745;
	margin-top: 16px;
	text-align: start;
`
const Li = styled.li`
	width: 380px;
	height: 30px;
	margin-right: 20px;
	color: #ffc745;
	list-style: none;
	margin-top: 10px;
`

const Span = styled.span`
	margin-right: 20px;
	font-size: 16px;
`
const Price = styled.span`
	margin: 17px;
	font-size: 16px;

`
const Data = styled.span`
	margin-left: 30px;
	font-size: 16px;

`
const Btn = styled.span`
	margin-left: 30px;

`
const List = (props) => {
	return (
		<Block>
			
			<ul>
				{props.expense.map((el) => (
					<Li key={el.id}>
						<Span>{el.title}</Span>
						<Price>${el.price}</Price>
						<Data>{el.date}</Data>
						<Btn onClick={() => props.deleteHandler(el.id)}>
							X
						</Btn>

					</Li>
				))}
			</ul>
		</Block>
	)
}

export default List
