import styled from 'styled-components'
import { BlockWithBackground } from './BlockWithBackground'

export const WorkExperience: React.FC = () => {
    return (
        <BlockWithBackground color="darkblue" header="Work Experience">
            <Container></Container>
        </BlockWithBackground>
    )
}

const Container = styled.div`
    padding: 1rem;
`
