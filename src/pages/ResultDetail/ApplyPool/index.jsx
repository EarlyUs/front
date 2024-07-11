import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { formatPhoneNumber } from '../../../lib/utils'
import * as s from './styles'
import Button from '../../../components/Button/index.tsx'

const ApplyPoolPage = () => {
    const [phoneNumber, setPhoneNumber] = useState('')

    const handlePhoneNumberChange = event => {
        const formatted = formatPhoneNumber(event.target.value)
        setPhoneNumber(formatted)
    }

    // 다음 페이지로 이동
    const navigate = useNavigate()
    const handleHref = () => {
        navigate('/wing/apply/done')
    }
    return (
        <>
            <s.Container>
                <s.Wrapper>
                    <s.Title>
                        이화나래벗으로 <br />
                        활동 가능한 수업이 생기면
                        <br />
                        바로 알려드릴게요
                    </s.Title>
                    <s.TelBox>
                        <s.TelTitle>전화번호 입력</s.TelTitle>
                        <s.TelInput
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                        />
                    </s.TelBox>
                    <s.ApplyBox>
                        <s.ApplyText>나에게 딱 맞는 날개 기다리며</s.ApplyText>
                        <Button
                            width={20.94}
                            height={3.38}
                            padding={0.94}
                            rad={8}
                            font={1.25}
                            bg={'var(--blue-strong)'}
                            color={'#fff'}
                            marginBottom={0.63}
                            func={handleHref}
                        >
                            대기 신청하기
                        </Button>
                    </s.ApplyBox>
                </s.Wrapper>
            </s.Container>
        </>
    )
}

export default ApplyPoolPage
