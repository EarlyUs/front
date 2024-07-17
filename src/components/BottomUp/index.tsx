import { ChangeEventHandler, useState, MouseEventHandler } from 'react'
import Button from '../Button/index'
import * as s from './styles'

interface TimeSlot {
    selectedDay: string
    startTime: string
    finishTime: string
}

interface Props {
    onClose: () => void
    onAddTime: (timeSlot: TimeSlot) => void
}

const BottomUp = ({ onClose, onAddTime }: Props) => {
    const handleBackgroundClick = () => {
        onClose() // Background 클릭 시 onClose 호출
    }

    const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation() // Container 클릭 이벤트가 Background까지 전파되지 않도록 방지
    }

    const [selectedDay, setSelectedDay] = useState('월요일')
    const [startTime, setStartTime] = useState('8:00')
    const [finishTime, setFinishTime] = useState('9:15')

    const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([])

    const weekdays = ['월요일', '화요일', '수요일', '목요일', '금요일']
    const startTimes = [
        '8:00',
        '9:30',
        '11:00',
        '12:30',
        '14:00',
        '15:30',
        '17:00',
    ]
    const finishTimes = [
        '9:30',
        '11:00',
        '12:30',
        '14:00',
        '15:30',
        '17:00',
        '18:30',
    ]

    const addTimeSlot = () => {
        setTimeSlots([
            ...timeSlots,
            { selectedDay: '', startTime: '', finishTime: '' },
        ])
    }

    const handleDayChange = (index: number, value: string) => {
        const newTimeSlots = [...timeSlots]
        newTimeSlots[index].selectedDay = value
        setTimeSlots(newTimeSlots)
    }

    const handleStartChange = (index: number, value: string) => {
        const newTimeSlots = [...timeSlots]
        newTimeSlots[index].startTime = value
        setTimeSlots(newTimeSlots)
    }

    const handleFinishChange = (index: number, value: string) => {
        const newTimeSlots = [...timeSlots]
        newTimeSlots[index].finishTime = value
        setTimeSlots(newTimeSlots)
    }

    return (
        <>
            <s.Background onClick={handleBackgroundClick}>
                <s.Container onClick={handleContainerClick}>
                    <s.ButtonGroup>
                        <Button
                            width={6.13}
                            height={2.25}
                            padding={0}
                            color={'var(--blue-strong)'}
                            bg={'#fff'}
                            font={1}
                            func={addTimeSlot}
                        >
                            + 시간 추가
                        </Button>
                        <Button
                            width={6.13}
                            height={2.25}
                            padding={0}
                            color={'var(--blue-strong)'}
                            bg={'#fff'}
                            font={1}
                            func={() => {
                                onAddTime({
                                    selectedDay,
                                    startTime,
                                    finishTime,
                                })
                                onClose()
                            }}
                        >
                            저장
                        </Button>
                    </s.ButtonGroup>
                    <s.TimeGroup>
                        <s.SelectGroup>
                            <s.Select
                                value={selectedDay}
                                onChange={e =>
                                    handleDayChange(0, e.target.value)
                                }
                            >
                                {weekdays.map((day, index) => (
                                    <option key={index + 1} value={day}>
                                        {day}
                                    </option>
                                ))}
                            </s.Select>
                            <s.SelectTime>
                                <s.Time
                                    value={startTime}
                                    onChange={e =>
                                        handleStartChange(0, e.target.value)
                                    }
                                >
                                    {startTimes.map((time, index) => (
                                        <option key={index + 1} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </s.Time>
                                ~
                                <s.Time
                                    value={finishTime}
                                    onChange={e =>
                                        handleFinishChange(0, e.target.value)
                                    }
                                >
                                    {finishTimes.map((time, index) => (
                                        <option key={index + 1} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </s.Time>
                            </s.SelectTime>
                        </s.SelectGroup>
                        {timeSlots.map((slot, index) => (
                            <s.SelectGroup key={index}>
                                <s.Select
                                    value={slot.selectedDay}
                                    onChange={e =>
                                        handleDayChange(index, e.target.value)
                                    }
                                >
                                    {weekdays.map((day, idx) => (
                                        <option key={idx} value={day}>
                                            {day}
                                        </option>
                                    ))}
                                </s.Select>
                                <s.SelectTime>
                                    <s.Time
                                        value={slot.startTime}
                                        onChange={e =>
                                            handleStartChange(
                                                index,
                                                e.target.value
                                            )
                                        }
                                    >
                                        {startTimes.map((time, idx) => (
                                            <option key={idx} value={time}>
                                                {time}
                                            </option>
                                        ))}
                                    </s.Time>
                                    ~
                                    <s.Time
                                        value={slot.finishTime}
                                        onChange={e =>
                                            handleFinishChange(
                                                index,
                                                e.target.value
                                            )
                                        }
                                    >
                                        {finishTimes.map((time, idx) => (
                                            <option key={idx} value={time}>
                                                {time}
                                            </option>
                                        ))}
                                    </s.Time>
                                </s.SelectTime>
                            </s.SelectGroup>
                        ))}
                    </s.TimeGroup>
                    <s.TimetableContainer>
                        <s.TimetableWrapper>
                            <s.Title>교시별 시간</s.Title>
                            <s.Timetable>
                                1교시 : 08:00-09:15
                                <br />
                                2교시 : 09:30-10:45
                                <br />
                                3교시 : 11:00-12:15
                                <br />
                                4교시 : 12:30-13:45
                                <br />
                                5교시 : 14:00-15:15
                            </s.Timetable>
                            <s.Timetable>
                                6교시 : 15:30-16:45
                                <br />
                                7교시 : 17:00-18:15
                                <br />
                                8교시 : 18:30-19:45
                                <br />
                                9교시 : 20:00-21:15
                            </s.Timetable>
                        </s.TimetableWrapper>
                    </s.TimetableContainer>
                </s.Container>
            </s.Background>
        </>
    )
}

export default BottomUp
