import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as s from './styles'
import Button from '../../components/Button/index.tsx'
import Dropdown from '../../components/Dropdown'
import { formatStudentId } from '../../lib/utils'

const FirstStepPage = () => {
    // 다음 페이지로 이동
    const navigate = useNavigate()

    const handleHref = () => {
        navigate('/wing/step/2')
    }

    // 정보 상태관리
    const [studentId, setStudentId] = useState('')
    const [name, setName] = useState('')
    const [primaryMajor, setPrimaryMajor] = useState('')
    const [majors, setMajors] = useState([])
    const [isButtonEnabled, setButtonEnabled] = useState(false)

    // 이름 변경시
    const handleNameChange = e => {
        setName(e.target.value)
    }

    // 학번 변경시
    const handleStudentIdChange = e => {
        const formatted = formatStudentId(e.target.value)
        setStudentId(formatted)
    }

    // Dropdown에서 선택 변경 사항을 받을 핸들러
    const handleSelectionChange = (college, department, major) => {
        const isFormValid =
            name.trim() !== '' &&
            studentId.trim() !== '' &&
            college !== '' &&
            department !== ''
        setButtonEnabled(isFormValid)
    }

    // 전공 추가
    const handleAddMajor = () => {
        setMajors(prevMajors => [...prevMajors, '']) // 빈 문자열을 추가하여 새 Dropdown을 나타냄
    }

    // 전공 삭제
    const handleRemoveMajor = index => {
        setMajors(prevMajors => prevMajors.filter((_, idx) => idx !== index))
    }

    return (
        <>
            <s.Container>
                <s.Wrapper>
                    <s.StudentInfo>
                        <s.Title>
                            먼저, 벗에 대해
                            <br />
                            알려주세요
                        </s.Title>
                        <s.InputBox className="student-name">
                            <s.Category>이름</s.Category>
                            <s.Input onChange={handleNameChange} />
                        </s.InputBox>
                        <s.InputBox>
                            <s.Category>학번</s.Category>
                            <s.Input
                                value={studentId}
                                onChange={handleStudentIdChange}
                            />
                        </s.InputBox>
                        <s.Regex>
                            *7자리 숫자로 입력해 주세요.(예 : 2321001)
                        </s.Regex>
                    </s.StudentInfo>
                    <s.MajorInfo>
                        <s.SubTitle>주전공</s.SubTitle>
                        <Dropdown onSelectionChange={handleSelectionChange} />
                    </s.MajorInfo>
                    {majors.map((_, index) => (
                        <s.MajorInfo key={index}>
                            <s.Header>
                                <s.SubTitle>부/복수전공</s.SubTitle>
                                <s.ButtonBox>
                                    {majors.length >= 1 && ( // 전공이 여러 개 있을 때만 삭제 버튼을 표시
                                        <s.AddButton
                                            onClick={() =>
                                                handleRemoveMajor(index)
                                            }
                                        >
                                            ➖ 전공 삭제하기
                                        </s.AddButton>
                                    )}
                                </s.ButtonBox>
                            </s.Header>
                            <Dropdown />
                        </s.MajorInfo>
                    ))}
                    <s.MajorInfo>
                        <s.Header>
                            <s.SubTitle>부/복수전공</s.SubTitle>
                            <s.ButtonBox>
                                <s.AddButton onClick={handleAddMajor}>
                                    ✚ 전공 추가하기
                                </s.AddButton>
                            </s.ButtonBox>
                        </s.Header>
                        <Dropdown />
                    </s.MajorInfo>
                    <s.ButtonContainer>
                        <Button
                            width={20.94}
                            rad={8}
                            font={1.25}
                            color={'var(--blue-strong)'}
                            bg={'var(--blue-mute)'}
                            func={handleHref}
                            disabled={!isButtonEnabled}
                        >
                            다음
                        </Button>
                    </s.ButtonContainer>
                </s.Wrapper>
            </s.Container>
        </>
    )
}

export default FirstStepPage
