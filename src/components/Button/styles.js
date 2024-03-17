import styled from 'styled-components';

export const Container = styled.button`
	-webkit-appearance: none;
	width: ${props => `${props.width}rem`};
	height: ${props => `${props.height}rem`};
	padding: ${props => `${props.padding}rem`};
	margin-bottom: ${props => `${props.marginBottom}rem`};
	border: ${props => `1px solid ${props.border} ` || none};
	border-radius: ${props => `${props.rad}px`};
	font-size: ${props => `${props.font}rem`};
	font-weight: 700;
	background-color: ${props => `${props.bg}`};
	color: ${props => `${props.color}`};
	text-align: center;
	cursor: pointer;

	&:focus {
		outline: none;
	}

	&.disabled {
		background-color: var(--gray-light);
		color: var(--gray-deep);
	}
`;
