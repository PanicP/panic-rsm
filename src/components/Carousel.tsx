import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import taliyah from '../assets/taliyah.jpg'
import brimstone from '../assets/brimstone.png'
import useScrollbar from '../hooks/useScrollbar'

const images = [taliyah, brimstone, taliyah, brimstone]

export const Carousel = ({ isBackground }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [scrollbarWidth] = useScrollbar()

    useEffect(() => {
        const lastIndex = images.length - 1
        if (currentIndex < 0) {
            setCurrentIndex(lastIndex)
        } else if (currentIndex > lastIndex) {
            setCurrentIndex(0)
        }
    }, [currentIndex, images])

    const handlePrev = () => {
        setCurrentIndex(currentIndex - 1)
    }

    const handleNext = () => {
        setCurrentIndex(currentIndex + 1)
    }

    return (
        <Container>
            <ImageSlider
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        isBackground={isBackground}
                        scrollbarWidth={scrollbarWidth}
                    />
                ))}
                <Image
                    key={-1}
                    src={images[0]}
                    isBackground={isBackground}
                    scrollbarWidth={scrollbarWidth}
                />
            </ImageSlider>
            {/* <LeftArrow onClick={handlePrev}>{'<'}</LeftArrow> */}
            <RightArrow onClick={handleNext}>{'>'}</RightArrow>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
`

const ImageSlider = styled.div`
    display: flex;
    transition: transform 0.3s ease-in-out;
`

const Image = styled.img`
    // width: ${(props) => (props.isBackground ? '100vw' : '100%')};
    // height: ${(props) => (props.isBackground ? '100vh' : '100%')};
    width: ${(props) => `calc(100vw - ${props.scrollbarWidth}px)`};
    height: 100vh;
    object-fit: cover;
`

const Arrow = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    cursor: pointer;

    border: 1px solid grey;
    border-radius: 50%;
    padding: 2rem;
`

const LeftArrow = styled(Arrow)`
    left: 3rem;
`

const RightArrow = styled(Arrow)`
    right: 3rem;
`
