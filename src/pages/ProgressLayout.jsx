import * as s from './styles';

const ProgressLayout = ({ children, progressBar }) => {
	return (
		<>
			<s.Container>
				{progressBar} {/* `/wing/step/*` 페이지에서만 렌더링 */}
				<s.Wrapper className="progress">{children}</s.Wrapper>
			</s.Container>
		</>
	);
};

export default ProgressLayout;
