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
	disabled,
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
				onClick={!disabled ? func : undefined}
				disabled={disabled}
				className={disabled ? 'disabled' : ''}
			>
				{children}
			</s.Container>
		</>
	);
};

export default Button;
