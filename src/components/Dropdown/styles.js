import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;
export const Select = styled.select`
	-webkit-appearance: none;
	width: 20.88rem;
	height: 2.5rem;
	margin-bottom: 1rem;
	padding: 0 1rem;
	border: none;
	background-color: var(--gray-light);

	&:focus {
		outline: none;
	}

	&:nth-child(n) {
		margin-bottom: none;
	}
`;
