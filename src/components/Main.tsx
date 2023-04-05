import styled from 'styled-components'
import { Navbar } from './Navbar'
import { Landing } from './Landing'
import { Introduction } from './Introduction'
import { Footer } from './Footer'

export const Main: React.FC = () => {
    return (
        <MainContainer>
            <Navbar />
            <Landing />
            <Introduction />
            <Footer />
        </MainContainer>
    )
}

const MainContainer = styled.div`
    position: relative;
    height: 150vh;
    width: 100%;
`
