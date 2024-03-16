import { useState, useEffect } from 'react';
import * as s from './styles';

const Loading = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const images = [
		'/imgs/mock_img_1.png', // 이미지 URL1
		'/imgs/mock_img_2.png', // 이미지 URL2
		'/imgs/mock_img_3.png', // 이미지 URL3
	];

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
		}, 2000); // 2초마다 인덱스 업데이트

		return () => clearInterval(intervalId); // 컴포넌트 언마운트시 인터벌 정리
	}, []);
	return (
		<>
			<s.Container>
				<s.Wrapper>
					<s.Title>
						벗이 날개를 달아줄 수 있는
						<br />
						수업을 찾고 있어요
					</s.Title>
					<s.AnimatedImg key={currentIndex} src={images[currentIndex]} />
					<s.InfoContainer>
						<s.InfoWrapper>
							<s.Head>
								장애학생지원센터에서는
								<br />
								어떤 일을 하나요?
							</s.Head>
							<s.Body>
								장애학생의 원활한 학교생활을 위해
								<br />
								<s.Highlight>
									교수학습지원, 대학생활지원, 진로 및 취업지원
								</s.Highlight>
								<br /> 등의 지원체계를 구축하고
								<br />
								장애학생의 개별 특성을 고려한
								<br />
								다양한 교육복지 지원서비스를 제공하고 있어요.
							</s.Body>
						</s.InfoWrapper>
					</s.InfoContainer>
				</s.Wrapper>
			</s.Container>
		</>
	);
};

export default Loading;