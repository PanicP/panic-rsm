import styled from 'styled-components'
import { Navbar } from './Navbar'

export const Main: React.FC = () => {
    return (
        <MainContainer>
            <Navbar />
            <div>Main</div>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    position: relative;
    height: 150vh;
    width: 100%;
`
