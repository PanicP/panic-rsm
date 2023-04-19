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
import wallpaper1 from '../assets/wallpaper/wallpaper1.jpg'
import wallpaper2 from '../assets/wallpaper/wallpaper2.jpg'
import wallpaper3 from '../assets/wallpaper/wallpaper3.jpg'
import wallpaper4 from '../assets/wallpaper/wallpaper4.jpg'
import wallpaper5 from '../assets/wallpaper/wallpaper5.jpg'
import wallpaper6 from '../assets/wallpaper/wallpaper6.jpg'

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
            <ParallaxBackground image={wallpaper1} />
            <Introduction fRef={introductionRef} />
            <ParallaxBackground image={wallpaper2} />
            <WorkExperience fRef={workExperienceRef} />
            <ParallaxBackground image={wallpaper3} />
            <Education fRef={educationRef} />
            <ParallaxBackground image={wallpaper4} />
            <Hobbies fRef={hobbiesRef} />
            <ParallaxBackground image={wallpaper5} />
            <Contact fRef={contactRef} />
            <ParallaxBackground image={wallpaper6} />
            <Footer />
        </MainContainer>
    )
}

const MainContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`
