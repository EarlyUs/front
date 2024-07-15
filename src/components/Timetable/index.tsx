import { memo } from 'react'
import _ from 'lodash'
import * as s from './styles'

interface SelectedTime {
    selectedDay: string
    startTime: string
}

interface TimetableProps {
    selectedTimes: SelectedTime[]
}
const classTimes = [
    { label: '1교시', startTime: '8:00', endTime: '9:30' },
    { label: '2교시', startTime: '9:30', endTime: '11:00' },
    { label: '3교시', startTime: '11:00', endTime: '12:30' },
    { label: '4교시', startTime: '12:30', endTime: '14:00' },
    { label: '5교시', startTime: '14:00', endTime: '15:30' },
    { label: '6교시', startTime: '15:30', endTime: '17:00' },
    { label: '7교시', startTime: '17:00', endTime: '18:30' },
    { label: '8교시', startTime: '18:30', endTime: '20:00' },
]

const Timetable = memo(({ selectedTimes }: TimetableProps) => {
    // 요일 배열
    const days = ['월요일', '화요일', '수요일', '목요일', '금요일']

    const isSelectedTime = (day: string, time: string) => {
        console.log(time)
        return selectedTimes.some(
            selectedTime =>
                selectedTime.selectedDay === day &&
                selectedTime.startTime === time
        )
    }

    return (
        <s.Container>
            <s.StyledTable>
                <thead>
                    <tr>
                        <s.StyledTh></s.StyledTh> {/* 좌측 상단 빈 셀 */}
                        {days.map(day => (
                            <s.StyledTh key={day}>{day[0]}</s.StyledTh>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {classTimes.map((classTime, index) => (
                        <tr key={index}>
                            <s.TimeLabel>{classTime.label[0]}</s.TimeLabel>
                            {days.map(day => (
                                <s.StyledTd
                                    key={day}
                                    style={{
                                        backgroundColor: isSelectedTime(
                                            day,
                                            classTime.startTime
                                        )
                                            ? 'var(--blue-mute)'
                                            : '#fff',
                                    }}
                                />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </s.StyledTable>
        </s.Container>
    )
})

export default Timetable
