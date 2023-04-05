import styled from 'styled-components'
import { BlockWithBackground } from './BlockWithBackground'

export const Introduction: React.FC = () => {
    return (
        <BlockWithBackground color="darkred" header="Who is me?">
            <Container>
                <Desc>
                    <div>Who is me?</div>
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
                <div>
                    My day-to-day comfort
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>JavaScript</div>
                    <div>ReactJS</div>
                </div>
                <div>
                    I have experienced in
                    <div>VueJS</div>
                    <div>Svelte</div>
                    <div>C#</div>
                </div>
                <div>
                    I can use
                    <div>Git with Github</div>
                </div>
            </Container>
        </BlockWithBackground>
    )
}

const Container = styled.div`
    padding: 1rem;
`

const Desc = styled.div``
