import React from 'react'
import styled from 'styled-components'

const Input = (props) => {
	return (
		<div>
			<StyledInput {...props}/>
		</div>
	)
}

const StyledInput = styled.input`
	width: 220px;
	height: 27px;
	color: #ffc745;
`

export default Input
