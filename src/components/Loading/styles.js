import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
    from {
        transform: translateY(20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;

export const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

export const Wrapper = styled.div`
	// margin: 5.44rem 1.25rem 0;
`;

export const Title = styled.div`
	font-size: 1.75rem;
	font-weight: 700;
`;

export const ImgBox = styled.div`
	margin: 3.13rem auto 2.5rem;
`;

export const Img = styled.img`
	width: 100%;
	height: 8.56rem;
	margin: 3.13rem auto 2.5rem;
`;

export const AnimatedImg = styled(Img)`
	animation: ${fadeInUp} 1s ease-in-out;
`;

export const InfoContainer = styled.div`
	width: 21rem;
	height: 13.5rem;
`;

export const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 2.5rem;
	padding: 1rem;
	background-color: var(--green-light);
	border-radius: 8px;
`;

export const Head = styled.div`
	margin-bottom: 1rem;
	font-size: 1.25rem;
	font-weight: 700;
	line-height: 1.5rem;
`;

export const Body = styled.div`
	font-size: 1rem;
	flex-wrap: wrap;
`;

export const Highlight = styled.span`
	color: var(--blue-strong);
	font-weight: 700;
`;