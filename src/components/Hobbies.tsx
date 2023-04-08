// @ts-nocheck

import styled from 'styled-components'
import { BlockWithBackground } from './BlockWithBackground'
import { Card } from './Card'
import Modal from './Modal'
import { useState } from 'react'

export const Hobbies: React.FC = ({ fRef }: { fRef: HTMLElement }) => {
    const [isModalWorkoutOpen, setIsModalWorkoutOpen] = useState(false)
    const [isModalGamingOpen, setIsModalGamingOpen] = useState(false)
    const [isModalMusicOpen, setIsModalMusicOpen] = useState(false)

    const data = [
        {
            onClick: () => setIsModalWorkoutOpen(true),
            title: 'Workout',
            image: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        },
        {
            onClick: () => setIsModalGamingOpen(true),
            title: 'Gaming',
            image: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        },
        {
            onClick: () => setIsModalMusicOpen(true),
            title: 'Music',
            image: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        },
    ]

    return (
        <BlockWithBackground fRef={fRef} color="darkorange" header="Hobbies">
            <Container>
                {data.map((item, index) => (
                    <ContainerCard>
                        <Card
                            key={index + item.title}
                            onClick={item.onClick}
                            title={item.title}
                            image={item.image}
                        />
                    </ContainerCard>
                ))}
            </Container>
            {isModalWorkoutOpen && (
                <Modal
                    onClose={() => setIsModalWorkoutOpen(false)}
                    isOpen={isModalWorkoutOpen}
                >
                    <Workout />
                </Modal>
            )}
            {isModalGamingOpen && (
                <Modal
                    onClose={() => setIsModalGamingOpen(false)}
                    isOpen={isModalGamingOpen}
                >
                    <div>test</div>
                </Modal>
            )}
            {isModalMusicOpen && (
                <Modal
                    onClose={() => setIsModalMusicOpen(false)}
                    isOpen={isModalMusicOpen}
                >
                    <div>test</div>
                </Modal>
            )}
        </BlockWithBackground>
    )
}

const Workout = () => {
    return (
        <ContainerModal>
            <div>
                Meet me, a fitness enthusiast who enjoys working out. Almost
                every day, I can be found doing exercises that use their own
                bodyweight and a dumbbell as resistance. With a commitment to
                physical fitness and a desire to push themselves, I have built
                an excellent regimen that helps me stay fit and healthy. I am
                committed to helping people achieve their fitness objectives and
                inspiring others to do the same, whether it is through push-ups,
                curls, pull-ups, or other exercises.
            </div>
            <div>These are my routine:</div>
            <div></div>
        </ContainerModal>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
`

const ContainerCard = styled.div`
    width: 10%;
`

const ContainerModal = styled.div``
