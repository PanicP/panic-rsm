import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import taliyah from '../assets/taliyah.jpg'
import brimstone from '../assets/brimstone.png'
import useScrollbar from '../hooks/useScrollbar'
import useInterval from '../hooks/useInterval'

const defaultImages = [taliyah, brimstone, taliyah, brimstone]

type tCarouselProps = {
    isBackground: boolean
    images: string[]
    arrowColor: string
}
export const Carousel: React.FC<tCarouselProps> = ({
    isBackground,
    images,
    arrowColor,
}: tCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [scrollbarWidth] = useScrollbar()
    const containerRef = useRef(null)
    const [containerWidth, setContainerWidth] = useState(0)
    const [_images, setImages] = useState(defaultImages)

    useEffect(() => {
        const { current } = containerRef
        if (current) {
            setContainerWidth((current as HTMLElement).offsetWidth)
        }
    }, [])

    // assign images
    useEffect(() => {
        if (images && images.length > 0) {
            setImages(images)
        }
    }, [])

    useEffect(() => {
        const lastIndex = _images.length - 1
        if (currentIndex < 0) {
            setCurrentIndex(lastIndex)
        } else if (currentIndex > lastIndex) {
            setCurrentIndex(0)
        }
    }, [currentIndex, _images])

    const { resetInterval } = useInterval(() => {
        if (isBackground) {
            setCurrentIndex(currentIndex + 1)
        } else {
            setCurrentIndex(currentIndex)
        }
    }, 5000)

    const handlePrev = () => {
        setCurrentIndex(currentIndex - 1)
    }

    const handleNext = () => {
        setCurrentIndex(currentIndex + 1)
        if (isBackground) {
            resetInterval()
        }
    }

    return (
        <Container>
            <ImageSlider
                ref={containerRef}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {_images.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        isBackground={isBackground}
                        scrollbarWidth={scrollbarWidth}
                        containerWidth={containerWidth}
                    />
                ))}
                <Image
                    key={-1}
                    src={_images[0]}
                    isBackground={isBackground}
                    scrollbarWidth={scrollbarWidth}
                    containerWidth={containerWidth}
                />
            </ImageSlider>
            {_images.length > 1 && !isBackground && (
                <LeftArrow onClick={handlePrev} arrowColor={arrowColor}>
                    <ContainerArrowIcon>
                        <div>{'<'}</div>
                    </ContainerArrowIcon>
                </LeftArrow>
            )}
            {_images.length > 1 && (
                <RightArrow onClick={handleNext} arrowColor={arrowColor}>
                    <ContainerArrowIcon>
                        <div>{'>'}</div>
                    </ContainerArrowIcon>
                </RightArrow>
            )}
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
    width: 100%;
`

const Image = styled.img<{
    isBackground: boolean
    containerWidth: number
    scrollbarWidth: number
}>`
    width: ${(props) =>
        props.isBackground
            ? `calc( ${props.containerWidth}px)`
            : // ? `calc(100vw - ${props.scrollbarWidth}px)`
              `${props.containerWidth - 0.5}px`};
    height: ${(props) =>
        props.isBackground
            ? `calc(100vh - 63px)`
            : `${props.containerWidth * 0.6}px`};
    // width: ${(props) => `calc(100vw - ${props.scrollbarWidth}px)`};
    // height: 100vh;
    object-fit: cover;
`

const Arrow = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    cursor: pointer;

    border: 2px solid white;
    border-radius: 50%;
    padding: 2rem;

    :hover {
        background-color: grey;
    }
`

const LeftArrow = styled(Arrow)<{ arrowColor: string }>`
    left: 3rem;
    ${(props) =>
        props.arrowColor &&
        `color: ${props.arrowColor}; border-color: ${props.arrowColor};`}
`

const RightArrow = styled(Arrow)<{ arrowColor: string }>`
    right: 3rem;
    ${(props) =>
        props.arrowColor &&
        `color: ${props.arrowColor}; border-color: ${props.arrowColor};`}
`

const ContainerArrowIcon = styled.div`
    position: relative;

    > div {
        position: absolute;
        transform: translate(-50%, -50%);
        font-weight: bold;
        font-size: 2rem;
    }
`
