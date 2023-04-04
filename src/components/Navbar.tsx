import styled from 'styled-components'
import linkedin from '../assets/linkedin.png'
import email from '../assets/email.png'
import { Hamburger } from './Hamburger'
import useResponsive from '../hooks/useResponsive'

export const Navbar: React.FC = () => {
    const { isMobile, isTablet, isDesktop } = useResponsive()
    console.log(isMobile, isTablet, isDesktop)
    return (
        <NavbarContainer>
            <PanicP>PanicP</PanicP>
            <LeftContainer>
                <NavButton>Introduction</NavButton>
                <NavButton>Work Experiences</NavButton>
                <NavButton>Education</NavButton>
                <NavButton>Hobbies</NavButton>
                <NavButton>Contact</NavButton>
            </LeftContainer>
            <RightContainer>
                <a
                    href="https://www.linkedin.com/in/thunthian-p/"
                    target="_blank"
                >
                    <Icon src={linkedin} alt=""></Icon>
                </a>
                <a href="mailto:thunthian.por@gmail.com">
                    <Icon src={email} alt=""></Icon>
                </a>
                <Hamburger />
            </RightContainer>
        </NavbarContainer>
    )
}

const NavbarContainer = styled.div`
    position: sticky;
    top: 0;
    background-color: #242424;
    display: flex;
    color: lightgrey;
`

const PanicP = styled.div`
    padding: 1rem;
    color: white;

    :hover {
        cursor: pointer;
    }
`

const LeftContainer = styled.div`
    display: flex;
    gap: 1rem;
    padding: 1rem;
    flex: 1;
`

const RightContainer = styled.div`
    display: flex;
    gap: 1rem;
    padding: 1rem;
`

const NavButton = styled.div`
    :hover {
        cursor: pointer;
        color: white;
    }
`

const Icon = styled.img`
    background-color: lightgrey;
    width: 1.5rem;
    height: 1.5rem;
`
