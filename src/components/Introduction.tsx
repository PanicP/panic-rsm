// @ts-nocheck

import styled from 'styled-components'
import { BlockWithBackground } from './BlockWithBackground'

export const Introduction: React.FC = ({ fRef }: { fRef: HTMLElement }) => {
    return (
        <BlockWithBackground fRef={fRef} color="darkred" header="Who is me?">
            <Container>
                <Desc>
                    <div>
                        I'm Thunthian Pornmuneewong, a web frontend develop from
                        Thailand who is currently living in Germany and studying
                        in Computer Science at the Hochschule Fulda. I have five
                        years of experience in the software industry, as a
                        software developer, with a passion for seeking
                        opportunities to work with challenging issues to develop
                        a skill set to be a better developer.
                    </div>
                </Desc>
                <SkillContainer>
                    <div>
                        <SkillHeader>My day-to-day comfort</SkillHeader>

                        <div>- HTML</div>
                        <div>- CSS</div>
                        <div>- JavaScript</div>
                        <div>- ReactJS</div>
                    </div>
                    <div>
                        <SkillHeader>I have experienced in</SkillHeader>
                        <div>- VueJS</div>
                        <div>- Svelte</div>
                        <div>- C#</div>
                        <div>- NodeJS</div>
                    </div>
                    <div>
                        <SkillHeader>I can also use</SkillHeader>
                        <div>- Git with Github</div>
                    </div>
                </SkillContainer>
            </Container>
        </BlockWithBackground>
    )
}

const Container = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
`

const Desc = styled.div`
    display: flex;
    justify-content: center;

    > div {
        width: 50%;
        min-width: 300px;
    }
`

const SkillContainer = styled.div`
    padding: 1rem 5rem;
    display: flex;
    justify-content: space-around;
`

const SkillHeader = styled.div`
    font-size: 1.5rem;
`
