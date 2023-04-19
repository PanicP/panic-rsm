// @ts-nocheck

import styled from 'styled-components'
import { BlockWithBackground } from './BlockWithBackground'
import { Card } from './Card'
import Modal from './Modal'
import { useState } from 'react'
import { Carousel } from './Carousel'
import { Spotify } from 'react-spotify-embed'
import workout from '../assets/hobbies/workout.jpg'
import gaming from '../assets/hobbies/gaming.jpg'
import music from '../assets/hobbies/music.jpg'

type tHobbiesProps = { fRef: MutableRefObject<HTMLDivElement | null> }

export const Hobbies: React.FC<tHobbiesProps> = ({ fRef }: tHobbiesProps) => {
    const [isModalWorkoutOpen, setIsModalWorkoutOpen] = useState(false)
    const [isModalGamingOpen, setIsModalGamingOpen] = useState(false)
    const [isModalMusicOpen, setIsModalMusicOpen] = useState(false)

    const data = [
        {
            onClick: () => setIsModalWorkoutOpen(true),
            title: 'Workout',
            image: workout,
        },
        {
            onClick: () => setIsModalGamingOpen(true),
            title: 'Gaming',
            image: gaming,
        },
        {
            onClick: () => setIsModalMusicOpen(true),
            title: 'Music',
            image: music,
        },
    ]

    return (
        <BlockWithBackground fRef={fRef} color="sienna" header="Hobbies">
            <Container>
                {data.map((item, index) => (
                    <ContainerCard key={index + item.title}>
                        <Card
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
                    <Gaming />
                </Modal>
            )}
            {isModalMusicOpen && (
                <Modal
                    onClose={() => setIsModalMusicOpen(false)}
                    isOpen={isModalMusicOpen}
                >
                    <Music />
                </Modal>
            )}
        </BlockWithBackground>
    )
}

const Workout = () => {
    return (
        <ContainerModal>
            <Section>
                Meet me, a fitness enthusiast who enjoys working out. Almost
                every day, I can be found doing exercises that use their own
                bodyweight and a dumbbell as resistance. With a commitment to
                physical fitness and a desire to push themselves, I have built
                an excellent regimen that helps me stay fit and healthy. I am
                committed to helping people achieve their fitness objectives and
                inspiring others to do the same, whether it is through push-ups,
                curls, pull-ups, or other exercises.
            </Section>

            <SectionColumn>
                <div>These are my routine:</div>

                <SectionColumn>
                    <div>1st Day</div>
                    <div>● Push-up 1 set with Bring Sally Up music</div>
                    <div>● Pull-up 3 set 8/8/failure</div>
                    <div>● Hammer Curl 3 set 15/15/failure</div>
                    <div>● Concentraion Curl 3 set 12/12/failure</div>
                </SectionColumn>

                <SectionColumn>
                    <div>2nd Day</div>
                    <div>● Push-up 1 set with Bring Sally Up music</div>
                    <div>● Decline Push-up 3 set 20/20/failure</div>
                    <div>● Incline Push-up 3 set 10/10/failure</div>
                    <div>● Bodyweight Skullcrusher 3 set 15/15/failure</div>
                    <div>● Bench Dip 3 set 15/15/failure</div>
                    <div>● Overhead Tricep Press 3 set 15/15/failure</div>
                </SectionColumn>

                <SectionColumn>
                    <div>3st Day</div>
                    <div>● Push-up 1 set with Bring Sally Up music</div>
                    <div>● Pike Push-up 3 set 12/12/failure</div>
                    <div>● Lateral Raise 3 set 15/15/failure</div>
                    <div>● Shoulder Shrug 3 set 20/25/failure</div>
                </SectionColumn>

                <SectionColumn>
                    <Youtube>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/41N6bKO-NVI"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </Youtube>
                </SectionColumn>
            </SectionColumn>
        </ContainerModal>
    )
}

const Gaming = () => {
    return (
        <ContainerModal>
            <Section>
                I'm a gamer who like to play rhythm games, metroidvania games,
                roguelite games, and most of 2D games (Because I have a moderate
                motion sickness).
            </Section>
            <SectionColumn>
                These are some of my favorite games
                <Section>
                    <LeftSection>
                        <iframe
                            width="600"
                            height="300"
                            src="https://www.youtube.com/embed/RYl4ejwgGuY"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </LeftSection>
                    <RightSection>
                        <div>Rhythm Games</div>
                        <div>● OSU</div>
                        <div>● OSU mania</div>
                        <div>● O2Jam</div>
                    </RightSection>
                </Section>
                <Section>
                    <LeftSection>
                        <iframe
                            width="600"
                            height="300"
                            src="https://www.youtube.com/embed/UAO2urG23S4"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </LeftSection>
                    <RightSection>
                        <div>Metroidvania Games</div>
                        <div>● Hollow Knight</div>
                        <div>● Blasphemous</div>
                        <div>● Aethena Noctis</div>
                    </RightSection>
                </Section>
                <Section>
                    <LeftSection>
                        <iframe
                            width="600"
                            height="300"
                            src="https://www.youtube.com/embed/91t0ha9x0AE"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </LeftSection>
                    <RightSection>
                        <div>Roguelite Games</div>
                        <div>● Enter the Gungeon</div>
                        <div>● Hades</div>
                        <div>● Slay the Spire</div>
                    </RightSection>
                </Section>
            </SectionColumn>
        </ContainerModal>
    )
}

const Music = () => {
    return (
        <ContainerModal>
            <Section>
                Music has become an essential aspect of my life, serving as a
                constant companion in almost every activity I engage in. Whether
                it's working, studying, or relaxing, I find myself reaching out
                for my headphones and tuning into my favorite tunes. The power
                of music to influence my mood and create a conducive atmosphere
                cannot be overemphasized. It helps me concentrate during work or
                study sessions, serves as a source of motivation during
                exercise, and helps me wind down and relax after a long day.
                Music has become an integral part of my daily routine, and I
                cannot imagine going through a day without it.
            </Section>
            <SectionColumn>
                These are albums that I like to listen to:
                <SectionColumn>
                    <Spotify
                        wide
                        link="https://open.spotify.com/playlist/62Qac7fgv47D7P4aGLmQhJ?si=dde582051ad44c41"
                    />
                    <Spotify
                        wide
                        link="https://open.spotify.com/playlist/4nUhCGqXyhaPafHYs2onzY?si=e730050f8db24e60"
                    />
                    <Spotify
                        wide
                        link="https://open.spotify.com/playlist/6zWLTRVf5YiaPJAgfoeQ75?si=718293bef190455c"
                    />
                    <Spotify
                        wide
                        link="https://open.spotify.com/playlist/35aW0pyN9Bof0Q2l1H1a4e?si=468974631c5a40a2"
                    />
                    <Spotify
                        wide
                        link="https://open.spotify.com/playlist/3oNmB7KCZ9rTpPpS0kTGnh?si=41986a1be9a6406b"
                    />
                </SectionColumn>
            </SectionColumn>
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
    width: 20%;
`

const ContainerModal = styled.div`
    width: 60vw;
`

const Section = styled.div`
    display: flex;
    padding: 1rem;
    flex: 1;
`

const Youtube = styled.div`
    display: flex;
    justify-content: center;
`

const LeftSection = styled.div`
    flex: 1 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`

const RightSection = styled.div`
    flex: 1 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1rem;
    padding: 1rem;
`

const SectionColumn = styled(Section)`
    flex-direction: column;
    gap: 1rem;
    // width: 60vw;
`
