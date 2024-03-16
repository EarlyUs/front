import { useNavigate } from 'react-router-dom';
import * as s from './styles';
import Button from '../../components/Button';
import TypeBlock from '../../components/TypeBlock';

const LastStepPage = () => {
	// 다음 페이지로 이동
	const navigate = useNavigate();

	const handleHref = () => {
		navigate('/wing/result');
	};
	return (
		<>
			<s.Container>
				<s.Wrapper>
					<s.Title>
						가장 도움 주고 싶은
						<br />
						유형을 선택해주세요
					</s.Title>
					<TypeBlock title={'노트필기'} desc={'이런저런도움'}></TypeBlock>
					<TypeBlock title={'노트북 속타'} desc={'이런저런도움'}></TypeBlock>
					<TypeBlock title={'교재 제작'} desc={'이런저런도움'}></TypeBlock>
					<TypeBlock title={'이동 지원'} desc={'이런저런도움'}></TypeBlock>
					<s.ButtonContainer>
						<Button
							width={20.94}
							rad={8}
							font={1.25}
							color={'#fff'}
							bg={'var(--blue-strong)'}
							func={handleHref}
						>
							매칭 받기
						</Button>
					</s.ButtonContainer>
				</s.Wrapper>
			</s.Container>
		</>
	);
};

export default LastStepPage;
