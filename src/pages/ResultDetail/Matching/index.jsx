import { useState, useEffect } from 'react';
import ClassCard from '../../../components/ClassCard';
import Button from '../../../components/Button';
import * as s from './styles';
import WingCard from '../../../components/WingCard';

const MatchingPage = () => {
	// 스크롤 위치에 따라 버튼 보이기
	const [showFixedButton, setShowFixedButton] = useState(true);

	const handleScroll = () => {
		const position = window.scrollY;
		setShowFixedButton(position < 180);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<>
			{/* <s.Container>
				<s.Wrapper> */}
			<s.Title>
				<s.Highlight>이화연</s.Highlight> 벗이 날개를 달아줄 수<br />
				있는 수업이에요
			</s.Title>
			<ClassCard />
			<s.Title>
				이화나래벗이 되면
				<br />
				이런 장점이 있어요
			</s.Title>
			<s.BenefitCard>
				<s.Desc>
					<s.Li>국가근로장학금으로 활동시간에 따라 급여를 받을 수 있어요</s.Li>
					<s.Li>
						자원봉사로 신청 시, 사회봉사활동 인증제 또는 사회봉사
						학점(1학점)으로 인정받을 수 있어요
					</s.Li>
					<s.Li>
						나중에 수강 예정인 과목을 미리 공부하고, 관심 있는 타 전공 수업도
						경험할 수 있어요
					</s.Li>
					<s.Li>새로운 인간관계를 만들 수 있어요 </s.Li>
					<s.Li>장애학생의 수업권 보장을 위해 직접 기여할 수 있어요</s.Li>
				</s.Desc>
			</s.BenefitCard>
			<s.Title>
				지금, 이화나래벗이
				<br />
				되어주세요!
			</s.Title>
			<s.FixedButton>
				<Button
					width={20.94}
					rad={8}
					font={1.25}
					color={'#fff'}
					bg={'var(--blue-strong)'}
				>
					바로 신청하기
				</Button>
			</s.FixedButton>
			{showFixedButton && (
				<s.ButtonContainer>
					<Button
						width={20.94}
						rad={8}
						font={1.25}
						color={'#fff'}
						bg={'var(--blue-strong)'}
					>
						바로 신청하기
					</Button>
				</s.ButtonContainer>
			)}
			<s.Title>
				날개 유형을 벗들과
				<br />
				공유해 보세요
			</s.Title>
			<WingCard name={'초록미르 나래'} />
			{/* </s.Wrapper>
			</s.Container> */}
		</>
	);
};

export default MatchingPage;
