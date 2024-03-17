import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import * as s from './styles';
import wings from '../../mock/wings.json';
import Button from '../Button/index';

const WingCard = ({ name }) => {
	const wing = wings[name];
	// 컴포넌트를 이미지로 저장
	const componentRef = useRef();

	const handleDownload = async () => {
		if (!componentRef.current) {
			console.log('ref가 없어요');
			return;
		}

		try {
			const component = componentRef.current;
			const canvas = await html2canvas(component, { scale: 2 });
			canvas.toBlob(blob => {
				if (blob !== null) {
					saveAs(blob, 'wing.png');
				}
			});
			console.log('saved');
		} catch (error) {
			console.error('Error converting div to image:', error);
		}
	};

	// sns 공유
	const shareToSNS = () => {
		try {
			navigator.share({
				title: document.title,
				text: '👼 나는 어떤 이화나래일까?\n이화나래벗은 장애학생의 수업을 다양한 방식으로 지원합니다.\n모든 이의 학습권을 존중하는 이화를 함께 만들 수 있어요\n…\n지금 벗만의 이화나래가 벗을 기다리고 있어요!\n아래 링크에서 이화나래 유형을 확인해보세요\n🔗https://earlyus-front.vercel.app',
				url: 'https://earlyus-front.vercel.app',
			});
		} catch {
			const text =
				'👼 나는 어떤 이화나래일까?\n이화나래벗은 장애학생의 수업을 다양한 방식으로 지원합니다.\n모든 이의 학습권을 존중하는 이화를 함께 만들 수 있어요\n…\n지금 벗만의 이화나래가 벗을 기다리고 있어요!\n아래 링크에서 이화나래 유형을 확인해보세요\n🔗https://earlyus-front.vercel.app';
			navigator.clipboard.writeText(text);
			alert('클립보드에 복사되었습니다.');
		}
	};

	return (
		<>
			<s.Container ref={componentRef}>
				<s.Wrapper bg={`${wing.bg_image}`}>
					{wing ? (
						<s.Card>
							<s.Title>{name}</s.Title>

							<s.DescBox>
								<s.SubTitle>{wing.subTitle}</s.SubTitle>
								<s.Desc>{wing.description}</s.Desc>
							</s.DescBox>
						</s.Card>
					) : (
						<p>해당 이름에 대한 정보가 없습니다.</p>
					)}
				</s.Wrapper>
				<s.ButtonGroup>
					<Button
						width={7.69}
						rad={8}
						font={1}
						color={'#000'}
						bg={'var(--gray-light)'}
						func={handleDownload}
					>
						이미지 저장
					</Button>
					<Button
						width={9.31}
						rad={8}
						font={1}
						color={'#000'}
						bg={'var(--gray-light)'}
						func={shareToSNS}
					>
						친구와 공유하기
					</Button>
				</s.ButtonGroup>
			</s.Container>
		</>
	);
};

export default WingCard;
