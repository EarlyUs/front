import * as s from './styles';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
	const [isModalOpen, setModalOpen] = useState(true);

	// 모달 닫기
	const handleCloseModal = () => {
		setModalOpen(false);
	};

	// 모달 상태가 바뀔 때마다 스크롤 방지/허용 처리
	useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [isModalOpen]);

	// 정보 입력 페이지로 이동
	const navigate = useNavigate();

	const handleHref = () => {
		navigate('/wing/step/1');
	};

	return (
		<>
			<s.Container>
				{isModalOpen ? <Modal onClose={handleCloseModal} /> : <></>}
				<s.Wrapper>
					<s.Contents>
						<s.Title>
							날개가 되어 주실 벗들,
							<br />
							환영해요!
						</s.Title>
						<s.DescCard>
							<s.Content>
								<s.Head>이화나래벗이란?</s.Head>
								<s.Body>이러저러한 활동을 하는 거에요</s.Body>
							</s.Content>
						</s.DescCard>
						<s.DescCard>
							<s.Content>
								<s.Head>이화나래벗이 되면 이런 장점이 있어요</s.Head>
								<s.Body>
									<s.Li>
										국가근로장학금으로 활동시간에 따라 급여를 받을 수 있어요
									</s.Li>
									<s.Li>
										자원봉사로 신청 시, 사회봉사활동 인증제 또는 사회봉사
										학점(1학점)으로 인정받을 수 있어요
									</s.Li>
									<s.Li>
										나중에 수강 예정인 과목을 미리 공부하고, 관심 있는 타 전공
										수업도 경험할 수 있어요
									</s.Li>
									<s.Li>새로운 인간관계를 만들 수 있어요 </s.Li>
									<s.Li>
										장애학생의 수업권 보장을 위해 직접 기여할 수 있어요
									</s.Li>
								</s.Body>
							</s.Content>
						</s.DescCard>
						<s.SubTitle>
							지금, 벗의 도움을 기다리는
							<br />
							장애학생 <s.HighLight>nn</s.HighLight>명
						</s.SubTitle>
						<s.Promote>나는 어떤 날개가 될까?</s.Promote>
						<Button
							width={20.94}
							marginBottom={3.38}
							rad={8}
							font={1.25}
							color={'#fff'}
							bg={'#0047ff'}
							func={handleHref}
						>
							매칭 시작하기
						</Button>
					</s.Contents>
				</s.Wrapper>
			</s.Container>
		</>
	);
};

export default LandingPage;
