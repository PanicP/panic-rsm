import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import taliyah from '../assets/taliyah.jpg'

const ParallaxContainer = styled.div`
    position: relative;
    height: 65vh;
    overflow: hidden;
`

const BackgroundImage = styled.div`
    position: absolute;
    top: -50vh;
    left: 0;
    width: 100%;
    height: 150vh;
    background: url(${(props) => props.image}) center center no-repeat;
    background-size: cover;
    transform: translate3d(0, 0, 0);
`

export const ParallaxBackground = ({ image }) => {
    const containerRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current
            const scrollPosition = container.getBoundingClientRect().top
            const background = container.firstChild
            background.style.transform = `translate3d(0, ${
                scrollPosition * 0.5
            }px, 0)`
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <ParallaxContainer ref={containerRef}>
            <BackgroundImage image={image} />
            {/* Add other components here */}
        </ParallaxContainer>
    )
}
