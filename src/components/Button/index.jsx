import * as s from './styles';

const Button = ({
	width,
	// height,
	padding,
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
				// height={height}
				padding={padding}
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
