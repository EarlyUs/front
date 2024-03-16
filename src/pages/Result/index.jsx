import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as s from './styles';
import Loading from '../../components/Loading';
import WingCard from '../../components/WingCard';
import Button from '../../components/Button';

const ResultPage = () => {
	// 로딩 상태관리
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 5000); // 5초 후에 isLoading을 false로 설정

		return () => clearTimeout(timer);
	}, []);

	// 결과 상세 페이지로 이동
	const navigate = useNavigate();

	const handleHref = () => {
		navigate('/wing/detail');
	};

	return (
		<>
			{/* <s.Container> */}
			{/* <s.Wrapper> */}
			{isLoading ? (
				<Loading />
			) : (
				<>
					<s.Title>
						<s.Highlight>이화연</s.Highlight> 벗에게 어울리는
						<br />
						날개는 <s.Highlight>초록미르 나래</s.Highlight>에요
					</s.Title>
					<WingCard name={'초록미르 나래'} />

					<s.ButtonContainer>
						<Button
							width={20.94}
							padding={0.94}
							rad={8}
							font={1.25}
							color={'#fff'}
							bg={'var(--blue-strong)'}
							func={handleHref}
						>
							자세히 보기
						</Button>
					</s.ButtonContainer>
				</>
			)}
			{/* </s.Wrapper> */}
			{/* </s.Container> */}
		</>
	);
};

export default ResultPage;
