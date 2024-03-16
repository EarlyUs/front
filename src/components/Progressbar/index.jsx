import * as s from './styles';

const Progressbar = ({ percentage }) => {
	return (
		<>
			<s.Container>
				<s.ProgressBox>
					<s.Progress percentage={percentage}></s.Progress>
				</s.ProgressBox>
			</s.Container>
		</>
	);
};

export default Progressbar;
