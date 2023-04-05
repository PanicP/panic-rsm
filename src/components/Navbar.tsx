import styled, { keyframes } from 'styled-components'
import linkedin from '../assets/linkedin.png'
import email from '../assets/email.png'
import useResponsive from '../hooks/useResponsive'
import { useEffect, useState } from 'react'
import { Hamburger } from './Hamburger'

export const Navbar: React.FC = () => {
    const { isMobile, isTablet, isDesktop } = useResponsive()
    const [isOpenDropdown, setIsOpenDropdown] = useState(false)

    useEffect(() => {
        if (!isMobile) {
            setIsOpenDropdown(false)
        }
    }, [isMobile])

    return (
        <>
            <NavbarContainer>
                <PanicP>PanicP</PanicP>
                {!isMobile ? (
                    <>
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
                        </RightContainer>
                    </>
                ) : (
                    <>
                        <LeftContainer />
                        <RightContainer>
                            <Hamburger
                                onClick={() =>
                                    setIsOpenDropdown((prev) => {
                                        console.log(prev)
                                        return !prev
                                    })
                                }
                            />
                        </RightContainer>
                    </>
                )}
            </NavbarContainer>
            <Pinpoint>
                {isOpenDropdown && (
                    <Dropdown isOpen={isOpenDropdown}>
                        <NavButtonMobile>Introduction</NavButtonMobile>
                        <NavButtonMobile>Work Experiences</NavButtonMobile>
                        <NavButtonMobile>Education</NavButtonMobile>
                        <NavButtonMobile>Hobbies</NavButtonMobile>
                        <NavButtonMobile>Contact</NavButtonMobile>

                        <a
                            href="https://www.linkedin.com/in/thunthian-p/"
                            target="_blank"
                        >
                            <NavButtonMobile>
                                <Icon src={linkedin} alt=""></Icon>
                                <div>Thunthian Pornmuneewong</div>
                            </NavButtonMobile>
                        </a>

                        <a href="mailto:thunthian.por@gmail.com">
                            <NavButtonMobile>
                                <Icon src={email} alt=""></Icon>
                                <div>thunthian.por@gmail.com</div>
                            </NavButtonMobile>
                        </a>
                    </Dropdown>
                )}
            </Pinpoint>
        </>
    )
}

const NavbarContainer = styled.div`
    position: sticky;
    top: 0;
    background-color: #242424;
    display: flex;
    color: lightgrey;
    z-index: 1000;
`

const PanicP = styled.div`
    padding: 1rem;
    color: white;
    font-weight: bold;

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

const NavButtonMobile = styled(NavButton)`
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 1rem;

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

const Pinpoint = styled.div`
    position: relative;
`

const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`

const slideUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`

// will fix this later
const Dropdown = styled.div`
    position: absolute;
    width: 100vw;
    top: 0;
    background-color: #242424;

    overflow: hidden;
    max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')};
    animation: ${({ isOpen }) => (isOpen ? slideDown : slideUp)} 0.5s
        ease-in-out;
    transition: max-height 0.5s ease-in-out;
`

const DropdownItem = styled.div``
