// @ts-nocheck

import { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'

export const Card = ({
    onClick,
    title,
    image,
}: {
    onClick: () => void
    title: string
    image: any
}) => {
    const [isHover, setIsHover] = useState(false)

    return (
        <Container
            onClick={onClick}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <Image src={image} alt="image" />
            {isHover && <Title>{title}</Title>}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
        box-shadow 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    will-change: transform;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 1rem;
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Title = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    font-size: 1.5rem;

    opacity: 0;
    animation: ${fadeIn} 0.3s ease-in-out forwards;
`
