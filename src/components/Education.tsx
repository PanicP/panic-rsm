import styled from 'styled-components'
import { BlockWithBackground } from './BlockWithBackground'
import { MutableRefObject } from 'react'

type tEducationProps = { fRef: MutableRefObject<HTMLDivElement | null> }

export const Education: React.FC<tEducationProps> = ({
    fRef,
}: tEducationProps) => {
    return (
        <BlockWithBackground fRef={fRef} color="darkgreen" header="Education">
            <Container>
                <Section>
                    <LeftSection>
                        <iframe
                            width="80%"
                            height="500"
                            src="https://www.youtube.com/embed/__0BSV0-yUI"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </LeftSection>
                    <RightSection>
                        <SectionTitle>
                            Master of Applied Computer Science in Global
                            Software Development
                        </SectionTitle>
                        <div>Hochschule Fulda - Fulda, Germany</div>
                        <div>October 2022 - Present</div>
                    </RightSection>
                </Section>
                <Section>
                    <LeftSection>
                        <iframe
                            width="80%"
                            height="500px"
                            src="https://www.youtube.com/embed/EJz9m41DI6U"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </LeftSection>
                    <RightSection>
                        <SectionTitle>
                            Bachelor of Engineering in Computer Engineering
                        </SectionTitle>
                        <div>Kasetsart University - Bangkok, Thailand</div>
                        <div>June 2013 - May 2017</div>
                    </RightSection>
                </Section>
            </Container>
        </BlockWithBackground>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
`

const Section = styled.div`
    display: flex;
    padding: 1rem;
`

const LeftSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

const RightSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.5rem;
`

const SectionTitle = styled.div`
    font-size: 2rem;
`
