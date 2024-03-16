import { useRef, useState, useEffect } from 'react';
import _ from 'lodash';
import * as s from './styles';

const Timetable = ({ initValue, setInitValue }) => {
	// 8시부터 18시까지의 시간 배열
	const times = Array.from({ length: 9 }, (_, i) => `${i + 1}교시`);

	// 요일 배열
	const days = ['월', '화', '수', '목', '금'];

	// 시간표 드래그
	const tableRef = useRef(null);
	const startIndex = useRef('');
	const currentIndex = useRef('');
	const mode = useRef(false);
	const [value, setValue] = useState(new Set());

	// 마우스 이벤트 여부
	const isMouseEvent = e => {
		return e instanceof MouseEvent;
	};

	// 터치 이벤트 여부
	const isTouchEvent = e => {
		return 'ontouchstart' in window && e.type.startsWith('touch');
	};

	// row, col index 가져오기
	const convertStringToIndex = idx => {
		let idxArr = idx.split('-');
		return [parseInt(idxArr[0]), parseInt(idxArr[1])];
	};

	// 셀 id 가져오기
	const getCellId = e => {
		if (e.target.tagName == 'TD') {
			return e.target.id;
		} else {
			return e.target.closest('td').id;
		}
	};

	// 드래그 시작
	const handleDragStart = e => {
		const index = getCellId(e);

		// 가져온 인덱스가 유효하지 않은 경우 함수 종료
		if (index === null) {
			return;
		}

		// 마우스 이벤트 일 때 : 좌 클릭이 아니면 종료
		if (isMouseEvent(e) && e.buttons !== 1) {
			return;
		}

		// 터치 이벤트 일 때 : 스크롤 비활성화
		if (isTouchEvent(e) && e.cancelable) {
			e.preventDefault();
		}

		// 시작 컬럼 id 저장
		startIndex.current = index;

		// 시작 컬럼이 선택 되어 있으면 미선택, 미선택이면 선택 처리
		mode.current = !value.has(index);

		// mode에 따라 드래그 처리
		let copy_value = _.cloneDeep(value);
		if (!mode.current) {
			copy_value.delete(index);
		} else {
			copy_value.add(index);
		}

		dragNoData(copy_value);
	};

	// 드래그 중
	const handleDragMove = e => {
		if (startIndex.current === '') {
			return;
		}

		if (isMouseEvent(e) && e.buttons !== 1) {
			return;
		}

		const index = getCellId(e);

		if (index === null) {
			return;
		}

		const isSameAsPrevIndex = index === currentIndex.current;

		if (isSameAsPrevIndex) {
			return;
		}

		currentIndex.current = index;

		const [startRowIndex, startColIndex] = convertStringToIndex(
			startIndex.current
		);
		const [rowIndex, colIndex] = convertStringToIndex(index);

		const [minRow, maxRow] = [startRowIndex, rowIndex].sort((a, b) => a - b);
		const [minCol, maxCol] = [startColIndex, colIndex].sort((a, b) => a - b);

		// 드래그 된 시작 -> 현재 컬럼까지 셀 선택/미선택 처리
		let copy_value = _.cloneDeep(value);
		for (let row = minRow; row <= maxRow; row++) {
			for (let col = minCol; col <= maxCol; col++) {
				let idx = `${row}-${String(col).padStart(2, '0')}`;

				if (!mode.current) {
					copy_value.delete(idx);
				} else {
					copy_value.add(idx);
				}
			}
		}

		dragNoData(copy_value); // 드래그 시 실시간으로 처리
	};

	// 드래그 종료
	const handleDragEnd = e => {
		startIndex.current = '';
		currentIndex.current = '';
		mode.current = false;

		// 드래그 결과를 실시간으로 반영하지 않고 마우스를 뗐을 때 반영하고 싶다면 이곳에서 dragNoData() 처리

		if (e.cancelable) {
			e.preventDefault();
		}
	};

	// 프로젝트 드래깅
	const dragNoData = dragData => {
		let data = new Set();

		Array.from(dragData).map(d => {
			if (d !== '') {
				let element = document.getElementById(d);
				let elementName = element != null ? element.getAttribute('name') : '';

				if (elementName == 'yesData' || elementName == 'noData') data.add(d);
			}
		});

		setInitValue(data);
	};

	// 선택 셀 초기화
	useEffect(() => {
		setValue(initValue || new Set());
	}, [initValue]);

	// table에 리스너 추가
	useEffect(() => {
		const node = tableRef.current?.querySelector('tbody') ?? tableRef.current;

		if (node) {
			node.addEventListener('touchstart', handleDragStart);
			node.addEventListener('mousedown', handleDragStart);
			node.addEventListener('touchmove', handleDragMove);
			node.addEventListener('mouseover', handleDragMove);
			node.addEventListener('touchend', handleDragEnd);
			node.addEventListener('mouseup', handleDragEnd);
			return () => {
				node.removeEventListener('touchstart', handleDragStart);
				node.removeEventListener('mousedown', handleDragStart);
				node.removeEventListener('touchmove', handleDragMove);
				node.removeEventListener('mouseover', handleDragMove);
				node.removeEventListener('touchend', handleDragEnd);
				node.removeEventListener('mouseup', handleDragEnd);
			};
		}
	}, [handleDragStart, handleDragMove, handleDragEnd]);

	return (
		<s.Container>
			<s.StyledTable ref={tableRef}>
				<thead>
					<tr>
						<s.StyledTh></s.StyledTh> {/* 좌측 상단 빈 셀 */}
						{days.map(day => (
							<s.StyledTh key={day}>{day}</s.StyledTh>
						))}
					</tr>
				</thead>
				<tbody>
					{times.map(time => (
						<tr key={time}>
							<s.TimeLabel>{time}</s.TimeLabel>
							{days.map(day => (
								<s.StyledTd key={day}></s.StyledTd>
							))}
						</tr>
					))}
				</tbody>
			</s.StyledTable>
		</s.Container>
	);
};

export default Timetable;
