import styled from 'styled-components';

export const Container = styled.div`
	width: 17.13rem;
	margin: 1.25rem 0;

	background-color: #f1f1f1;
`;

export const Wrapper = styled.div`
	padding: 0.94rem;
`;

export const Img = styled.div`
	width: 100%;
	height: 6.25rem;
	background-color: #d9d9d9;
`;

export const Title = styled.div`
	width: 100%;
	height: fit-content;
	margin: 0 0 0.69rem;
	font-size: 1.5rem;
	font-weight: 700;
`;

export const InfoBox = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
`;

export const Category = styled.div`
	height: 1.19rem;
	display: flex;
	flex-direction: row;
	margin-bottom: 0.63rem;
	font-size: 1rem;
	font-weight: 400;

	&:nth-child(3) {
		margin-bottom: 0;
	}
`;

export const Name = styled.div`
	width: 4.44rem;
`;

export const Content = styled.div`
	width: 10.38rem;
`;
