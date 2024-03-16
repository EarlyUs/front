import styled from 'styled-components';

export const Container = styled.div`
	min-width: 375px;
	height: 100vh;
	margin: 0 auto;
	background-color: #fff;
`;

export const Wrapper = styled.div`
	width: 21rem;
	// margin: 1.25rem auto 0;
`;

export const Contents = styled.div`
	margin-left: 1.25rem;
`;

export const Title = styled.div`
	margin-top: 4.19rem;
	font-weight: 700;
	font-size: 2rem;
`;

export const SubTitle = styled.div`
	margin-top: 4.19rem;
	font-weight: 700;
	font-size: 1.5rem;
`;

export const DescCard = styled.div`
	width: 20.94rem;
	// padding: 1rem 0.81rem;
	border-radius: 8px;
	background-color: #f1f1f1;

	&:nth-child(2) {
		margin-top: 1.25rem;
	}

	&:nth-child(3) {
		margin-top: 3.19rem;
	}
`;

export const Content = styled.div`
	padding: 1rem 0.81rem;
`;

export const Head = styled.div`
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 0.63rem;
`;

export const Body = styled.div`
	font-size: 1rem;
	font-weight: 400;
`;

export const Li = styled.li`
	width: 19.13rem;
	font-size: 0.75rem;
`;

export const HighLight = styled.span`
	color: var(--blue-strong);
`;

export const Promote = styled.div`
	width: 21rem;
	margin: 2.31rem auto 0.63rem;
	font-size: 1rem;
	font-weight: 700;
	text-align: center;
	color: var(--blue-strong);
`;
