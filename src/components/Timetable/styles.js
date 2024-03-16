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
	border: 1px solid #000;
	padding: 10px;
	text-align: center;
	background-color: #fff; // 헤더 셀 배경색을 설정하세요
`;

export const StyledTd = styled.td`
	border: 1px solid #000;
	height: 50px; // 셀의 높이를 조절하세요
	background-color: #fff; // 셀 배경색을 설정하세요
`;

export const TimeLabel = styled.td`
	border: 1px solid #000;
	text-align: center;
	background-color: #f7f7f7; // 시간 레이블 배경색을 설정하세요
`;
