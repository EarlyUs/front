import { useState } from 'react';
import * as s from './styles';

const TypeBlock = ({ title, desc, img, onSelectChange, isSelected }) => {
	return (
		<>
			<s.Container onClick={onSelectChange} isselected={isSelected}>
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
