import * as s from './styles';

const InfoCard = () => {
	return (
		<>
			<s.Container>
				<s.Wrapper>
					<s.Title>중국근세의사회와문화</s.Title>
					<s.InfoBox>
						<s.Category>
							<s.Name>시간</s.Name>
							<s.Content>화2 금3</s.Content>
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
