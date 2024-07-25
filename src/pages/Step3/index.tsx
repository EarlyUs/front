// step3.tsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as s from './styles'
import Button from '../../components/Button/index'
import TypeBlock from '../../components/TypeBlock'
import { http } from '../../lib/api/client' // Import the http instance from client.ts

type HelpType =
    | 'NOTETAKING'
    | 'FASTTYPING'
    | 'MATERIALMAKING'
    | 'MOBILITYSUPPORT'

const LastStepPage = ({ formData }: { formData: any }) => {
    const navigate = useNavigate()
    const [currentSelected, setCurrentSelected] = useState<HelpType | null>(
        null
    )

    const handleHref = async () => {
        if (currentSelected === null) return

        const data = {
            ...formData,
            helpType: currentSelected,
        }

        try {
            const response = await http.post('/match/wing', data)
            console.log(response.data)
            navigate('/wing/result')
        } catch (error) {
            console.error(error)
        }
    }

    const handleSelectChange = (type: HelpType) => {
        setCurrentSelected(type)
    }

    return (
        <>
            <s.Container>
                <s.Wrapper>
                    <s.Title>
                        가장 잘 해낼 수 있는
                        <br />
                        도움 유형을 선택해주세요
                    </s.Title>
                    <TypeBlock
                        title={'노트필기'}
                        desc={'수업 내용 중 강조해야 하는\n부분을 기록해요'}
                        img={'/icons/pencil.webp'}
                        onSelectChange={() => handleSelectChange('NOTETAKING')}
                        isSelected={currentSelected === 'NOTETAKING'}
                    />
                    <TypeBlock
                        title={'노트북 속타'}
                        desc={'강의 내용을 빠르게 작성하여\n전달해요'}
                        img={'/icons/computer.webp'}
                        onSelectChange={() => handleSelectChange('FASTTYPING')}
                        isSelected={currentSelected === 'FASTTYPING'}
                    />
                    <TypeBlock
                        title={'교재 제작'}
                        desc={'강의 교재와 도서를\n소리나 점자 형태로 만들어요'}
                        img={'/icons/books.webp'}
                        onSelectChange={() =>
                            handleSelectChange('MATERIALMAKING')
                        }
                        isSelected={currentSelected === 'MATERIALMAKING'}
                    />
                    <TypeBlock
                        title={'이동 지원'}
                        desc={'캠퍼스 내 원활하고 안전한\n이동을 보조해요'}
                        img={'/icons/wheelchair.webp'}
                        onSelectChange={() =>
                            handleSelectChange('MOBILITYSUPPORT')
                        }
                        isSelected={currentSelected === 'MOBILITYSUPPORT'}
                    />
                    <s.ButtonContainer>
                        <Button
                            width={20.94}
                            rad={8}
                            font={1.25}
                            color={'#fff'}
                            bg={'var(--blue-strong)'}
                            func={handleHref}
                            disabled={currentSelected === null}
                            className={
                                currentSelected === null ? 'disabled' : ''
                            }
                        >
                            나에게 어울리는 날개 찾기
                        </Button>
                    </s.ButtonContainer>
                </s.Wrapper>
            </s.Container>
        </>
    )
}

export default LastStepPage
