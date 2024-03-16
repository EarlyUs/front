import * as s from './styles';
import courses from '../../data/courses.json';

const ClassCard = () => {
	const student = '이화연';
	const course = courses[student];
	return (
		<>
			<s.Container>
				<s.Wrapper>
					<s.Title>{course.name}</s.Title>
					<s.CourseBox>
						<s.InfoBox>
							<s.InfoContent>
								<s.InfoTitle>학수번호</s.InfoTitle>
								<s.InfoDesc>{course.code}</s.InfoDesc>
							</s.InfoContent>
							<s.InfoContent>
								<s.InfoTitle>교수</s.InfoTitle>
								<s.InfoDesc>{course.prof}</s.InfoDesc>
							</s.InfoContent>
							<s.InfoContent>
								<s.InfoTitle>학점</s.InfoTitle>
								<s.InfoDesc>{course.credit}</s.InfoDesc>
							</s.InfoContent>
							<s.InfoContent>
								<s.InfoTitle>시간</s.InfoTitle>
								<s.InfoDesc>{course.time}</s.InfoDesc>
							</s.InfoContent>
							<s.InfoContent>
								<s.InfoTitle>교시</s.InfoTitle>
								<s.InfoDesc>{course.schedule}</s.InfoDesc>
							</s.InfoContent>
							<s.InfoContent>
								<s.InfoTitle>강의실</s.InfoTitle>
								<s.InfoDesc>{course.location}</s.InfoDesc>
							</s.InfoContent>
						</s.InfoBox>
					</s.CourseBox>
					<s.StudentBox>
						<s.InfoContent>
							<s.InfoTitle>장애유형</s.InfoTitle>
							<s.InfoDesc>{course.disorder}</s.InfoDesc>
						</s.InfoContent>
						<s.InfoContent>
							<s.InfoTitle>중증도</s.InfoTitle>
							<s.InfoDesc>{course.severity}</s.InfoDesc>
						</s.InfoContent>
						<s.InfoContent className="help-type">
							<s.InfoTitle className="help-type">도움 유형</s.InfoTitle>
							<s.InfoDesc className="help-type">
								{course.help.map((type, index) => (
									<s.Type key={index}>{type}</s.Type>
								))}
							</s.InfoDesc>
						</s.InfoContent>
					</s.StudentBox>
				</s.Wrapper>
			</s.Container>
		</>
	);
};

export default ClassCard;
