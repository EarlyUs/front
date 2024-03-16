import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import * as s from './styles';
import wings from '../../data/wings.json';
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

	return (
		<>
			<s.Container ref={componentRef}>
				<s.Wrapper>
					{wing ? (
						<>
							<s.Title>{name}</s.Title>
							<s.ImgBox>
								<s.Img src={`${wing.image}`} alt={name} />
							</s.ImgBox>
							<s.SubTitle>{wing.subTitle}</s.SubTitle>
							<s.Desc>{wing.description}</s.Desc>
						</>
					) : (
						<p>해당 이름에 대한 정보가 없습니다.</p>
					)}
				</s.Wrapper>
			</s.Container>
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
					// func={handleDownload}
				>
					친구와 공유하기
				</Button>
			</s.ButtonGroup>
		</>
	);
};

export default WingCard;
