import * as s from './styles';

const InfoCard = () => {
	return (
		<>
			<s.Container>
				<s.Wrapper>
					<s.Title>과목명</s.Title>
					<s.InfoBox>
						<s.Category>
							<s.Name>시간</s.Name>
							<s.Content>월4목5</s.Content>
						</s.Category>
						<s.Category>
							<s.Name>도움 유형</s.Name>
							<s.Content>노트북속타</s.Content>
						</s.Category>
						<s.Category>
							<s.Name>장애 유형</s.Name>
							<s.Content>시각</s.Content>
						</s.Category>
					</s.InfoBox>
				</s.Wrapper>
			</s.Container>
		</>
	);
};

export default InfoCard;
