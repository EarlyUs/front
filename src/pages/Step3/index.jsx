import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as s from './styles';
import Button from '../../components/Button';
import TypeBlock from '../../components/TypeBlock';

const LastStepPage = () => {
	// 다음 페이지로 이동
	const navigate = useNavigate();

	// 각 TypeBlock의 선택 상태를 관리하는 객체
	const [selectedStates, setSelectedStates] = useState({
		noteTaking: false,
		fastTyping: false,
		materialMaking: false,
		mobilitySupport: false,
	});

	// 전체 선택된 TypeBlock의 개수를 계산
	const selectedCount = Object.values(selectedStates).filter(Boolean).length;

	const handleHref = () => {
		if (selectedCount === 0) return;
		navigate('/wing/result');
	};

	// 특정 TypeBlock의 선택 상태를 토글하는 함수
	const handleSelectChange = type => {
		setSelectedStates(currentStates => ({
			...currentStates,
			[type]: !currentStates[type],
		}));
	};

	return (
		<>
			<s.Container>
				<s.Wrapper>
					<s.Title>
						가장 잘 해낼 수 있는
						<br />
						도움 유형을 선택해주세요
					</s.Title>
					<TypeBlock
						title={'노트필기'}
						desc={'수업 내용 중 강조해야 하는\n부분을 기록해요'}
						img={'/icons/pencil.webp'}
						onSelectChange={() => handleSelectChange('noteTaking')}
					/>
					<TypeBlock
						title={'노트북 속타'}
						desc={'강의 내용을 빠르게 작성하여\n전달해요'}
						img={'/icons/computer.webp'}
						onSelectChange={() => handleSelectChange('fastTyping')}
					/>
					<TypeBlock
						title={'교재 제작'}
						desc={'강의 교재와 도서를\n소리나 점자 형태로 만들어요'}
						img={'/icons/books.webp'}
						onSelectChange={() => handleSelectChange('materialMaking')}
					/>
					<TypeBlock
						title={'이동 지원'}
						desc={'캠퍼스 내 원활하고 안전한\n이동을 보조해요'}
						img={'/icons/wheelchair.webp'}
						onSelectChange={() => handleSelectChange('mobilitySupport')}
					/>
					<s.ButtonContainer>
						<Button
							width={20.94}
							rad={8}
							font={1.25}
							color={'#fff'}
							bg={'var(--blue-strong)'}
							func={handleHref}
							disabled={selectedCount === 0}
							className={selectedCount === 0 ? 'disabled' : ''}
						>
							나에게 어울리는 날개 찾기
						</Button>
					</s.ButtonContainer>
				</s.Wrapper>
			</s.Container>
		</>
	);
};

export default LastStepPage;
