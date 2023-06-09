// @ts-nocheck

import styled, { keyframes } from 'styled-components'
import linkedin from '../assets/linkedin.png'
import email from '../assets/email.png'
import github from '../assets/github.png'
import useResponsive from '../hooks/useResponsive'
import { useEffect, useState } from 'react'
import { Hamburger } from './Hamburger'

const NAVIGATION = {
    LANDING: 'landing',
    INTRODUCTION: 'introduction',
    WORK_EXPERIENCE: 'workExperience',
    EDUCATION: 'education',
    HOBBIES: 'hobbies',
    CONTACT: 'contact',
}

type tNavbarProps = {
    landingRef: MutableRefObject<HTMLDivElement | null>
    introductionRef: MutableRefObject<HTMLDivElement | null>
    workExperienceRef: MutableRefObject<HTMLDivElement | null>
    educationRef: MutableRefObject<HTMLDivElement | null>
    hobbiesRef: MutableRefObject<HTMLDivElement | null>
    contactRef: MutableRefObject<HTMLDivElement | null>
}

export const Navbar: React.FC<tNavbarProps> = ({
    landingRef,
    introductionRef,
    workExperienceRef,
    educationRef,
    hobbiesRef,
    contactRef,
}: tNavbarProps) => {
    const { isMobile, isTablet, isDesktop } = useResponsive()
    const [isOpenDropdown, setIsOpenDropdown] = useState(false)

    useEffect(() => {
        if (!isMobile) {
            setIsOpenDropdown(false)
        }
    }, [isMobile])

    const handleNavigate = ({ target }: { target: string }) => {
        const options = {
            behavior: 'smooth',
            block: 'center',
        }
        switch (target) {
            case NAVIGATION.LANDING:
                landingRef.current.scrollIntoView(options)
                break
            case NAVIGATION.INTRODUCTION:
                introductionRef.current.scrollIntoView(options)
                break
            case NAVIGATION.WORK_EXPERIENCE:
                window.scrollTo({
                    behavior: 'smooth',
                    top:
                        workExperienceRef.current.getBoundingClientRect().top -
                        document.body.getBoundingClientRect().top -
                        63,
                })
                break
            case NAVIGATION.EDUCATION:
                window.scrollTo({
                    behavior: 'smooth',
                    top:
                        educationRef.current.getBoundingClientRect().top -
                        document.body.getBoundingClientRect().top -
                        63,
                })
                break
            case NAVIGATION.HOBBIES:
                hobbiesRef.current.scrollIntoView(options)
                break
            case NAVIGATION.CONTACT:
                contactRef.current.scrollIntoView(options)
                break
            default:
                break
        }
    }

    return (
        <>
            <NavbarContainer>
                <PanicP
                    onClick={() =>
                        handleNavigate({
                            target: NAVIGATION.LANDING,
                        })
                    }
                >
                    PanicP
                </PanicP>
                {!isMobile ? (
                    <>
                        <LeftContainer>
                            <NavButton
                                onClick={() =>
                                    handleNavigate({
                                        target: NAVIGATION.INTRODUCTION,
                                    })
                                }
                            >
                                Introduction
                            </NavButton>
                            <NavButton
                                onClick={() =>
                                    handleNavigate({
                                        target: NAVIGATION.WORK_EXPERIENCE,
                                    })
                                }
                            >
                                Work Experiences
                            </NavButton>
                            <NavButton
                                onClick={() =>
                                    handleNavigate({
                                        target: NAVIGATION.EDUCATION,
                                    })
                                }
                            >
                                Education
                            </NavButton>
                            <NavButton
                                onClick={() =>
                                    handleNavigate({
                                        target: NAVIGATION.HOBBIES,
                                    })
                                }
                            >
                                Hobbies
                            </NavButton>
                            <NavButton
                                onClick={() =>
                                    handleNavigate({
                                        target: NAVIGATION.CONTACT,
                                    })
                                }
                            >
                                Contact
                            </NavButton>
                        </LeftContainer>
                        <RightContainer>
                            <a href="https://github.com/PanicP" target="_blank">
                                <Icon src={github} alt=""></Icon>
                            </a>
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
                        <NavButtonMobile
                            onClick={() =>
                                handleNavigate({
                                    target: NAVIGATION.LANDING,
                                })
                            }
                        >
                            Introduction
                        </NavButtonMobile>
                        <NavButtonMobile
                            onClick={() =>
                                handleNavigate({
                                    target: NAVIGATION.INTRODUCTION,
                                })
                            }
                        >
                            Work Experiences
                        </NavButtonMobile>
                        <NavButtonMobile
                            onClick={() =>
                                handleNavigate({
                                    target: NAVIGATION.EDUCATION,
                                })
                            }
                        >
                            Education
                        </NavButtonMobile>
                        <NavButtonMobile
                            onClick={() =>
                                handleNavigate({
                                    target: NAVIGATION.HOBBIES,
                                })
                            }
                        >
                            Hobbies
                        </NavButtonMobile>
                        <NavButtonMobile
                            onClick={() =>
                                handleNavigate({
                                    target: NAVIGATION.CONTACT,
                                })
                            }
                        >
                            Contact
                        </NavButtonMobile>

                        <a href="https://github.com/PanicP" target="_blank">
                            <NavButtonMobile>
                                <Icon src={github} alt=""></Icon>
                                <div>PanicP</div>
                            </NavButtonMobile>
                        </a>
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
    border-bottom: 2px solid white;
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
    border-radius: 4px;
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
const Dropdown = styled.div<{ isOpen: boolean }>`
    position: fixed;
    width: 100vw;
    top: 66px;
    background-color: #242424;
    z-index: 500;
    overflow: hidden;
    max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')};
    animation: ${({ isOpen }) => (isOpen ? slideDown : slideUp)} 0.5s
        ease-in-out;
    transition: max-height 0.5s ease-in-out;
`

const DropdownItem = styled.div``
