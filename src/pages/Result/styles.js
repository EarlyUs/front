import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-image: url(${props => props.bg});
	background-size: cover;
	display: flex;
	flex-direction: column;
`;

export const Wrapper = styled.div`
	height: 100%;
	margin: 5.44rem auto 3.38rem;
`;

export const Title = styled.div`
	font-size: 1.75rem;
	font-weight: 700;
`;

export const Highlight = styled.span`
	color: var(--blue-strong);
	font-weight: 700;
`;

export const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	position: fixed;
	left: 0;
	bottom: 3.38rem;
`;
