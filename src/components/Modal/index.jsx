import { useRef } from 'react';
import * as s from './styles';
import InfoCard from '../InfoCard/index';
import Button from '../Button';

const Modal = ({ onClose }) => {
	const backgroundRef = useRef();

	const handleClose = e => {
		if (e.target === backgroundRef.current) {
			onClose();
		}
	};

	return (
		<>
			<s.Background ref={backgroundRef} onClick={handleClose}>
				<s.Container>
					<s.Wrapper>
						<s.Title>
							당신의 도움이 절실한
							<br />
							벗에게 날개를 달아주세요!
						</s.Title>
						<InfoCard />
						<s.BtnGroup>
							<Button
								width={17.13}
								padding={0.94}
								rad={8}
								bg={'#0047ff'}
								font={1.25}
								color={'#fff'}
							>
								바로 지원하기
							</Button>
							<Button
								width={17.13}
								padding={0.94}
								border={'#0047ff'}
								rad={8}
								bg={'#fff'}
								font={1.25}
								color={'#0047ff'}
								func={onClose}
							>
								조금 더 찾아볼게요
							</Button>
						</s.BtnGroup>
					</s.Wrapper>
				</s.Container>
			</s.Background>
		</>
	);
};

export default Modal;
