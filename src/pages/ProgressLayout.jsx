import * as s from './styles';

const ProgressLayout = ({ children, progressBar }) => {
	return (
		<>
			{progressBar} {/* `/wing/step/*` 페이지에서만 렌더링 */}
			<s.Container>{children}</s.Container>
		</>
	);
};

export default ProgressLayout;
