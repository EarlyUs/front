import { useState } from 'react';
import * as s from './styles';

const TypeBlock = ({ title, desc, img, onSelectChange }) => {
	const [isselected, setIsSelected] = useState(false);

	const handleToggleSelect = () => {
		const newSelectedState = !isselected;
		setIsSelected(newSelectedState);
		onSelectChange(newSelectedState);
	};

	return (
		<>
			<s.Container onClick={handleToggleSelect} isselected={isselected}>
				<s.Content>
					<s.Title>{title}</s.Title>
					<s.Desc>{desc}</s.Desc>
				</s.Content>
				<s.Img src={img} />
			</s.Container>
		</>
	);
};

export default TypeBlock;
