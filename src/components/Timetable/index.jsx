import { useRef, useState } from 'react';
import * as s from './styles';

const Timetable = initialValue => {
	const startIndex = useRef('');
	const currentIndex = useRef('');
	const startTable = useRef([]);
	const mode = useRef(false);

	const [value, setValue] = useState(initialValue);

	return (
		<>
			<s.Container></s.Container>
			{/* <s.Table>
				<s.THead></s.THead>
				<s.TBody>
					{value.map((row, rowIndex) => (
						<s.Tr key={rowIndex}>
							<s.Th>{time}</s.Th>
							{row.map(() => (
								<TD></TD>
							))}
						</s.Tr>
					))}
				</s.TBody>
			</s.Table> */}
		</>
	);
};

export default Timetable;
