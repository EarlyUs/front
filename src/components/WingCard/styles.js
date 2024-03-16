import styled from 'styled-components';

export const Container = styled.div`
	width: 18rem;
	height: 25rem;
	margin: 3.13rem auto 1rem;
	background-color: var(--gray-light);
	border-radius: 22px;
`;

export const Wrapper = styled.div`
	padding: 1.88rem 0 2.44rem;
`;

export const Title = styled.div`
	color: var(--blue-strong);
	text-align: center;
	font-size: 1.5rem;
	font-weight: 700;
`;

export const ImgBox = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	justify-content: center;
`;

export const Img = styled.img`
	width: 13.63rem;
	height: fit-content;
	margin: 1.56rem auto 1.5rem;
`;

export const SubTitle = styled.div`
	width: 100%;
	margin-bottom: 1rem;
	font-size: 1.25rem;
	font-weight: 700;
	text-align: center;
`;

export const Desc = styled.div`
	width: 12.5rem;
	margin: 0 auto;
	font-size: 1rem;
	line-height: 1.19rem;
	text-align: center;
`;

export const ButtonGroup = styled.div`
	width: 18rem;
	margin: 0 auto 4.94rem;
	display: flex;
	justify-content: space-between;
`;
