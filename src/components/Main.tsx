import styled from 'styled-components'
import { Navbar } from './Navbar'
import { Landing } from './Landing'
import { Introduction } from './Introduction'
import { Footer } from './Footer'
import { WorkExperience } from './WorkExperience'
import { Education } from './Education'
import { Hobbies } from './Hobbies'
import { Contact } from './Contact'
import { ParallaxBackground } from './ParallaxBackground'

export const Main: React.FC = () => {
    return (
        <MainContainer>
            <Navbar />
            <Landing />
            <ParallaxBackground />
            <Introduction />
            {/* <ParallaxBackground /> */}
            <WorkExperience />
            {/* <ParallaxBackground /> */}
            <Education />
            {/* <ParallaxBackground /> */}
            <Hobbies />
            {/* <ParallaxBackground /> */}
            <Contact />
            {/* <ParallaxBackground /> */}
            <Footer />
        </MainContainer>
    )
}

const MainContainer = styled.div`
    position: relative;
    height: 150vh;
    width: 100%;
`
