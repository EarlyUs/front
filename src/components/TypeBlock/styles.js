import styled, { css } from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 5.69rem;
	margin-bottom: 0.75rem;
	display: flex;
	flex-direction: row;
	background-color: var(--gray-light);
	border-radius: 8px;

	${props =>
		props.isSelected &&
		css`
			background-color: var(--green-light);
			border: 2px solid var(--blue-strong);
		`}
`;

export const Content = styled.div`
	width: 13.69rem;
	padding: 1rem;
	display: flex;
	flex-direction: column;
`;

export const Title = styled.div`
	font-size: 1.25rem;
	font-weight: 700;
`;

export const Desc = styled.div`
	font-size: 1rem;
`;

export const Img = styled.div`
	width: 5.25rem;
	height: 3.94rem;
`;
