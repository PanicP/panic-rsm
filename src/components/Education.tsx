import styled from 'styled-components'
import { BlockWithBackground } from './BlockWithBackground'

export const Education: React.FC = () => {
    return (
        <BlockWithBackground color="darkgreen" header="Education">
            <Container></Container>
        </BlockWithBackground>
    )
}

const Container = styled.div`
    padding: 1rem;
`
