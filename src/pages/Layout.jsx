import * as s from './styles';

const Layout = ({ children }) => {
	return (
		<>
			<s.Container>{children}</s.Container>
		</>
	);
};

export default Layout;
