import styled from 'styled-components';

export const Container = styled.button`
	-webkit-appearance: none;
	width: ${props => `${props.width}rem`};
	padding: ${props => `${props.padding}rem`};
	border: ${props => `1px solid ${props.border} ` || none};
	border-radius: ${props => `${props.rad}px`};
	font-size: ${props => `${props.font}rem`};
	font-weight: 600;
	background-color: ${props => `${props.bg}`};
	color: ${props => `${props.color}`};
	text-align: center;
	cursor: pointer;

	&:focus {
		outline: none;
	}
`;
