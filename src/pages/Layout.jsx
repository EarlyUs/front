import * as s from './styles';

const Layout = ({ children }) => {
	return (
		<>
			<s.Container>
				<s.Wrapper>{children}</s.Wrapper>
			</s.Container>
		</>
	);
};

export default Layout;
