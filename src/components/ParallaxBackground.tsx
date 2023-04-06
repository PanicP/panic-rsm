import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import taliyah from '../assets/taliyah.jpg'

const imageUrl = taliyah
const height = '500px'

export const ParallaxBackground = () => {
    const [offset, setOffset] = useState(0)
    const [position, setPosition] = useState({
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    })
    const [parentPosition, setParentPosition] = useState({
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    })
    const parallaxRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => setOffset(window.pageYOffset)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const node = parallaxRef.current
        const parent = node.parentNode
        if (node && parent) {
            const parentRect = parent.getBoundingClientRect()
            const { top, left, bottom, right } = node.getBoundingClientRect()
            // console.log(
            //     `Top: ${top - parentRect.top},
            //     Left: ${left - parentRect.left},
            //     Bottom: ${bottom - parentRect.top},
            //     Right: ${right - parentRect.left}`
            // )
            // console.log(
            //     `Top: ${top}, Left: ${left}, Bottom: ${bottom}, Right: ${right}`
            // )
            console.log(
                `Top: ${parentRect.top}, Left: ${parentRect.left}, Bottom: ${parentRect.bottom}, Right: ${parentRect.right}`
            )
            setPosition({
                top: top,
                left: left,
                bottom: bottom,
                right: right,
            })
            setParentPosition({
                top: parentRect.top,
                left: parentRect.left,
                bottom: parentRect.bottom,
                right: parentRect.right,
            })
        }
    }, [offset])

    useEffect(() => {
        // console.log(offset)
        // console.log(position)
        // console.log(offset, position.bottom)
    }, [offset])

    return (
        <Container height={height}>
            <ParallaxSection
                ref={parallaxRef}
                imageUrl={imageUrl}
                offset={offset}
                position={position}
            />
        </Container>
    )
}

const ParallaxSection = styled.section`
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100vw;

    position: absolute;
    transform: translateY(${(props) => props.offset * 0.5}px);
    z-index: -1;
`

const Container = styled.div`
    position: relative;
    height: ${(props) => props.height};
`
