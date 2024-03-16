import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: inline-block;
	background-image: url(${props => props.bg});
	background-size: cover;
	animation: ${props =>
		props.fadeout ? `${fadeout} 1.5s ease-out forwards` : 'none'};
`;

export const Wrapper = styled.div`
	margin: 5.19rem 1.25rem;
`;

export const Title = styled.div`
	font-size: 3rem;
	font-weight: 700;
`;

export const Subtitle = styled.div`
	font-size: 1.5rem;
	font-weight: 700;
`;
