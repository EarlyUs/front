import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as s from './styles';
import Button from '../../components/Button/index';

const FirstStepPage = () => {
	// 부/복수전공 섹션 관리
	const [majorInfos, setMajorInfos] = useState([]);

	// 부/복수전공 추가
	const handleAddMajor = () => {
		setMajorInfos(prevInfos => [...prevInfos, {}]);
	};

	// 부/복수전공 삭제
	const handleRemoveMajor = idxToRemove => {
		setMajorInfos(prevInfos =>
			prevInfos.filter((_, index) => index !== idxToRemove)
		);
	};

	// 다음 페이지로 이동
	const navigate = useNavigate();

	const handleHref = () => {
		navigate('/wing/step/2');
	};

	return (
		<>
			<s.Container>
				<s.Wrapper>
					<s.StudentInfo>
						<s.Title>
							먼저, 벗에 대해
							<br />
							알려주세요
						</s.Title>
						<s.InputBox className="student-name">
							<s.Category>이름</s.Category>
							<s.Input />
						</s.InputBox>
						<s.InputBox>
							<s.Category>학번</s.Category>
							<s.Input />
						</s.InputBox>
						<s.Regex>*7자리 숫자로 입력해 주세요.(예 : 2321001)</s.Regex>
					</s.StudentInfo>
					<s.MajorInfo>
						<s.SubTitle>주전공</s.SubTitle>
					</s.MajorInfo>

					{majorInfos.map((info, index) => (
						<s.MajorInfo key={index}>
							<s.SubTitle>부/복수전공</s.SubTitle>
							<s.AddButton onClick={() => handleRemoveMajor(index)}>
								➖ 부/복수전공 삭제하기
							</s.AddButton>
						</s.MajorInfo>
					))}
					<s.MajorInfo>
						<s.SubTitle>부/복수전공</s.SubTitle>
						<s.AddButton onClick={handleAddMajor}>
							✚ 부/복수전공 추가하기
						</s.AddButton>
					</s.MajorInfo>
					<s.ButtonContainer>
						<Button
							width={20.94}
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

export default FirstStepPage;
