import styled from 'styled-components';

export const Container = styled.div`
	width: 21rem;
	margin: 0 auto;
`;

export const StyledTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	table-layout: fixed;
`;

export const StyledTh = styled.th`
	// padding: 10px;
	text-align: center;
	background-color: #fff;
	font-size: 0.75rem;
	font-weight: 400;
	border: none;

	&:first-child {
		width: 1rem;
		margin-right: 0.25rem;
	}
`;

export const StyledTd = styled.td`
	height: 1.25rem;
	background-color: #fff;
	border: 1px solid #bcbcbc;
`;

export const TimeLabel = styled.td`
	display: inline-block;
	text-align: center;
	vertical-align: top;
	background-color: #fff;
	font-size: 0.5rem;
	border: none;
`;
