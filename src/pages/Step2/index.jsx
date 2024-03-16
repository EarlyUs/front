import { useNavigate } from 'react-router-dom';
import * as s from './styles';
import Timetable from '../../components/Timetable';
import Button from '../../components/Button';

const SecondStepPage = () => {
	// 다음 페이지로 이동
	const navigate = useNavigate();

	const handleHref = () => {
		navigate('/wing/step/3');
	};
	return (
		<>
			<s.Container>
				<s.Wrapper>
					<s.Title>
						가능한 시간을
						<br />
						알려주세요
					</s.Title>
					<Timetable
					// onTouchStart={handleDragStart}
					// onMouseDown={handleDragStart}
					// onTouchMove={handleDragMove}
					// onMouseOver={handleDragMove}
					// onTouchEnd={handleDragEnd}
					// onMouseUp={handleDragEnd}
					/>
					<s.ButtonContainer>
						<Button
							width={20.94}
							padding={0.94}
							rad={8}
							font={1.25}
							color={'var(--blue-strong)'}
							bg={'var(--blue-mute)'}
							func={handleHref}
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
