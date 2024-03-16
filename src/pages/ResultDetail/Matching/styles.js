import styled from 'styled-components';

export const Title = styled.div`
	margin-bottom: 1.5rem;
	font-size: 1.75rem;
	font-weight: 700;

	&:last-child {
		margin-top: 3.13rem;
		margin-bottom: 0;
	}
`;

export const Highlight = styled.span`
	color: var(--blue-strong);
`;

export const BenefitCard = styled.div`
	width: 21rem;
	margin: 0 auto 2rem;
	background-color: var(--gray-light);
	border-radius: 8px;
`;

export const Desc = styled.div`
	padding: 1rem;
	font-size: 1rem;
`;

export const Li = styled.li``;

export const FixedButton = styled.div`
	margin-bottom: 3.13rem;
`;

export const ButtonContainer = styled.div`
	width: fit-content;
	height: fit-content;
	position: fixed;
	bottom: 3.38rem;
`;
