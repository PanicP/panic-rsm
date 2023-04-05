import styled from 'styled-components'
import { BlockWithBackground } from './BlockWithBackground'

export const Contact: React.FC = () => {
    return (
        <BlockWithBackground color="darkgrey" header="Contact">
            <Container>
                <div>
                    Linkedin:{' '}
                    <a
                        href="https://www.linkedin.com/in/thunthian-p/"
                        target="_blank"
                    >
                        Thunthian Pornmuneewong
                    </a>
                </div>
                <div>
                    Email:{' '}
                    <a href="mailto:thunthian.por@gmail.com">
                        thunthian.por@gmail.com
                    </a>
                </div>
            </Container>
        </BlockWithBackground>
    )
}

const Container = styled.div`
    padding: 1rem 1rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.5rem;
`
