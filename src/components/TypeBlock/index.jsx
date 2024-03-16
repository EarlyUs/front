import { useState } from 'react';
import * as s from './styles';

const TypeBlock = ({ title, desc, img }) => {
	const [isSelected, setIsSelected] = useState(false);

	const handleToggleSelect = () => {
		setIsSelected(!isSelected);
	};

	return (
		<>
			<s.Container onClick={handleToggleSelect} isSelected={isSelected}>
				<s.Content>
					<s.Title>{title}</s.Title>
					<s.Desc>{desc}</s.Desc>
				</s.Content>
				<s.Img img={img} />
			</s.Container>
		</>
	);
};

export default TypeBlock;
