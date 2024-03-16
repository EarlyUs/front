import * as s from './styles';
import { useEffect, useState } from 'react';
import majorsData from '../../data/major.json';

const Dropdown = ({ onSelectionChange }) => {
	const [selectedCollege, setSelectedCollege] = useState('');
	const [selectedDepartment, setSelectedDepartment] = useState('');
	const [selectedMajor, setSelectedMajor] = useState('');
	const [departments, setDepartments] = useState([]);
	const [majors, setMajors] = useState([]);

	// 대학 선택 시 학과/부서 업데이트
	useEffect(() => {
		if (selectedCollege) {
			const college = majorsData.colleges.find(
				college => college.name === selectedCollege
			);
			if (college) {
				setDepartments(college.departments || []);
				setMajors([]); // 학과/부서 변경 시 majors 초기화
				setSelectedDepartment('');
				setSelectedMajor('');
			}
		}
	}, [selectedCollege]);

	// 학과/부서 선택 시 전공 업데이트
	useEffect(() => {
		if (selectedDepartment) {
			const college = majorsData.colleges.find(college =>
				college.departments.includes(selectedDepartment)
			);
			if (college && college.majors && college.majors[selectedDepartment]) {
				setMajors(college.majors[selectedDepartment]);
			} else {
				setMajors([]);
			}
			setSelectedMajor('');
		}
	}, [selectedDepartment]);

	// 대학, 학과, 전공 선택 상태가 변경될 때마다 상위 컴포넌트에 알림
	useEffect(() => {
		onSelectionChange?.(selectedCollege, selectedDepartment, selectedMajor);
	}, [selectedCollege, selectedDepartment, selectedMajor, onSelectionChange]);

	const handleCollegeChange = e => {
		setSelectedCollege(e.target.value);
	};

	const handleDepartmentChange = e => {
		setSelectedDepartment(e.target.value);
	};

	const handleMajorChange = e => {
		setSelectedMajor(e.target.value);
	};

	return (
		<>
			<s.Container>
				<s.Select value={selectedCollege} onChange={handleCollegeChange}>
					<option value="">대학 선택</option>
					{majorsData.colleges.map((college, index) => (
						<option key={index} value={college.name}>
							{college.name}
						</option>
					))}
				</s.Select>

				<s.Select
					value={selectedDepartment}
					onChange={handleDepartmentChange}
					disabled={!selectedCollege}
				>
					<option value="">학과/부서 선택</option>
					{departments.map((department, index) => (
						<option key={index} value={department}>
							{department}
						</option>
					))}
				</s.Select>

				{majors.length > 0 && (
					<s.Select value={selectedMajor} onChange={handleMajorChange}>
						<option value="">전공 선택</option>
						{majors.map((major, index) => (
							<option key={index} value={major}>
								{major}
							</option>
						))}
					</s.Select>
				)}
			</s.Container>
		</>
	);
};

export default Dropdown;
