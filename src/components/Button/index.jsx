import * as s from './styles';

const Button = ({
	width,
	marginBottom,
	border,
	rad,
	font,
	color,
	bg,
	children,
	func,
}) => {
	return (
		<>
			<s.Container
				width={width}
				marginBottom={marginBottom}
				border={border}
				rad={rad}
				font={font}
				color={color}
				bg={bg}
				onClick={func}
			>
				{children}
			</s.Container>
		</>
	);
};

export default Button;
