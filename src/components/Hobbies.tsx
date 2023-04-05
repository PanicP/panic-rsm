import styled from 'styled-components'
import { BlockWithBackground } from './BlockWithBackground'

export const Hobbies: React.FC = () => {
    return (
        <BlockWithBackground color="darkyellow" header="Hobbies">
            <Container></Container>
        </BlockWithBackground>
    )
}

const Container = styled.div`
    padding: 1rem;
`
