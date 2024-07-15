import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import * as s from './styles'
import Timetable from '../../components/Timetable'
import Button from '../../components/Button/index'
import BottomUp from '../../components/BottomUp'

// SelectedTime 인터페이스 정의
interface SelectedTime {
    selectedDay: string
    startTime: string
}

const SecondStepPage = () => {
    // 다음 페이지로 이동
    const navigate = useNavigate()

    const handleHref = () => {
        navigate('/wing/step/3')
    }

    // 시간 추가하기
    const [isBottomUp, setBottomUp] = useState(false)

    const [selectedTimes, setSelectedTimes] = useState<SelectedTime[]>([])

    const addSelectedTime = (timeSlot: SelectedTime) => {
        setSelectedTimes([...selectedTimes, timeSlot])
        console.log([...selectedTimes, timeSlot])
    }

    return (
        <>
            {isBottomUp && (
                <BottomUp
                    onClose={() => setBottomUp(false)}
                    onAddTime={addSelectedTime}
                />
            )}

            <s.Container>
                <s.Wrapper>
                    <s.Title>
                        이화나래벗 활동이
                        <br />
                        가능한 시간을 선택해주세요
                    </s.Title>
                    <s.ButtonGroup>
                        <Button
                            width={4.63}
                            height={1.63}
                            padding={0}
                            rad={8}
                            font={0.75}
                            color={'#000'}
                            bg={'#fff'}
                            border={'#bcbcbc'}
                            func={() => setSelectedTimes([])}
                        >
                            초기화
                        </Button>
                        <Button
                            width={6.75}
                            height={1.63}
                            padding={0}
                            rad={8}
                            font={0.75}
                            color={'#000'}
                            bg={'#fff'}
                            border={'#bcbcbc'}
                            func={() => setBottomUp(true)}
                        >
                            시간 추가하기
                        </Button>
                    </s.ButtonGroup>
                    <Timetable selectedTimes={selectedTimes} />
                    <s.ButtonContainer>
                        <Button
                            width={20.94}
                            rad={8}
                            font={1.25}
                            color={'var(--blue-strong)'}
                            bg={'var(--blue-mute)'}
                            func={handleHref}
                        >
                            다음
                        </Button>
                    </s.ButtonContainer>
                </s.Wrapper>
            </s.Container>
        </>
    )
}

export default SecondStepPage
