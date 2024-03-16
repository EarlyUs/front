import { useNavigate } from 'react-router-dom';
import * as s from './styles';
import Timetable from '../../components/Timetable';
import Button from '../../components/Button';
import { useState } from 'react';

const SecondStepPage = () => {
	// 다음 페이지로 이동
	const navigate = useNavigate();

	const handleHref = () => {
		navigate('/wing/step/3');
	};

	// 시간표 선택
	const [selectedCells, setSelectedCells] = useState(new Set());

	const handleSetSelectedCells = newSelectedCells => {
		setSelectedCells(newSelectedCells);
		console.log(selectedCells);
	};

	// API 형식으로 데이터를 변환
	const convertToApiFormat = () => {
		const classTimeList = Array.from(selectedCells).map(cellId => {
			return { timeId: cellId };
		});

		return { classTimeList };
	};

	// 백엔드로 데이터를 전송
	const sendToBackend = async () => {
		const payload = convertToApiFormat();

		// API 호출 예시 (axios 사용)
		try {
			console.log(payload);
			// const response = await axios.post('/api/endpoint', payload);
			// console.log(response.data);
			// 성공적으로 데이터를 전송했다면, 추가 로직을 여기에 구현합니다.
			navigate('/wing/step/3');
		} catch (error) {
			console.error(error);
			// 오류 처리 로직을 여기에 구현합니다.
		}
	};
	return (
		<>
			<s.Container>
				<s.Wrapper>
					<s.Title>
						이화나래벗 활동이
						<br />
						가능한 시간을 선택해주세요
					</s.Title>
					<Timetable
						initValue={selectedCells}
						setInitValue={handleSetSelectedCells}
					/>
					<s.ButtonContainer>
						<Button
							width={20.94}
							rad={8}
							font={1.25}
							color={'var(--blue-strong)'}
							bg={'var(--blue-mute)'}
							func={sendToBackend}
						>
							다음
						</Button>
					</s.ButtonContainer>
				</s.Wrapper>
			</s.Container>
		</>
	);
};

export default SecondStepPage;
