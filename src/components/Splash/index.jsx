import { useState, useEffect } from 'react';
import * as s from './styles';

const Splash = ({ onFadeout }) => {
	// 애니메이션 상태 관리
	const [fadeout, setFadeout] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setFadeout(true);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	// 애니메이션 종료
	const handleAnimationEnd = () => {
		if (fadeout) {
			onFadeout();
		}
	};
	return (
		<>
			<s.Container
				bg={'/imgs/bg_splash.webp'}
				fadeout={fadeout}
				onAnimationEnd={handleAnimationEnd}
			>
				<s.Wrapper>
					<s.Title>도움배움</s.Title>
					<s.Subtitle>나만의 이화나래 찾아보기</s.Subtitle>
				</s.Wrapper>
			</s.Container>
		</>
	);
};

export default Splash;
