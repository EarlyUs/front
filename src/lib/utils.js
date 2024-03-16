/**
 * 전화번호를 (000-0000-0000) 형태로 포맷팅하는 함수
 * @param {string} phoneNumber - 포맷팅할 전화번호
 * @returns {string} 포맷팅된 전화번호
 */

export const formatPhoneNumber = phoneNumber => {
	// 전화번호에서 숫자가 아닌 모든 문자를 제거
	const digits = phoneNumber.replace(/\D/g, '');

	// 숫자만 있는 문자열을 (000-0000-0000) 형태로 변환
	const formatted = digits.replace(/(\d{3})(\d{4})(\d{4})/, '($1-$2-$3)');

	return formatted;
};

/**
 * 학번을 7자리 숫자 형태로 포맷팅하는 함수
 * @param {string} studentId - 포맷팅할 학번
 * @returns {string} 포맷팅된 학번
 */
export const formatStudentId = studentId => {
	// 학번에서 숫자가 아닌 모든 문자를 제거
	const digits = studentId.replace(/\D/g, '');

	// 숫자가 7자리를 초과하는 경우, 처음 7자리만 사용
	const formattedDigits = digits.slice(0, 7);

	// 숫자만 있는 문자열을 0000000 형태로 변환
	const formatted = `${formattedDigits}`;

	return formatted;
};
