import styled from 'styled-components'
import { BlockWithBackground } from './BlockWithBackground'
import { Carousel } from './Carousel'

export const WorkExperience: React.FC = ({ fRef }: { fRef: HTMLElement }) => {
    return (
        <BlockWithBackground
            fRef={fRef}
            color="darkblue"
            header="Work Experience"
        >
            <Container>
                <Section>
                    <LeftSection>
                        <Carousel isBackground={false} />
                    </LeftSection>
                    <RightSection>Right</RightSection>
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
`

const LeftSection = styled.div`
    // flex: 1 0;
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
`

const RightSection = styled.div`
    // flex: 1;
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    font-size: 2rem;
`
