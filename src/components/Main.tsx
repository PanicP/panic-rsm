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
import taliyah from '../assets/taliyah.jpg'
import brimstone from '../assets/brimstone.png'
import { useRef } from 'react'

export const Main: React.FC = () => {
    const landingRef = useRef(null)
    const introductionRef = useRef(null)
    const workExperienceRef = useRef(null)
    const educationRef = useRef(null)
    const hobbiesRef = useRef(null)
    const contactRef = useRef(null)

    return (
        <MainContainer>
            <Navbar
                landingRef={landingRef}
                introductionRef={introductionRef}
                workExperienceRef={workExperienceRef}
                educationRef={educationRef}
                hobbiesRef={hobbiesRef}
                contactRef={contactRef}
            />
            <Landing fRef={landingRef} />
            <ParallaxBackground image={taliyah} />
            <Introduction fRef={introductionRef} />
            <ParallaxBackground image={brimstone} />
            <WorkExperience fRef={workExperienceRef} />
            <ParallaxBackground image={taliyah} />
            <Education fRef={educationRef} />
            <ParallaxBackground image={brimstone} />
            <Hobbies fRef={hobbiesRef} />
            <ParallaxBackground image={taliyah} />
            <Contact fRef={contactRef} />
            <ParallaxBackground image={brimstone} />
            <Footer />
        </MainContainer>
    )
}

const MainContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`
