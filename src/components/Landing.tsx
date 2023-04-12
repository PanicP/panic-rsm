// @ts-nocheck

import styled from 'styled-components'
import { Carousel } from './Carousel'
import { useEffect } from 'react'
import useImportImage from '../hooks/useImportImage'
import landing1 from '../assets/landing/landing1.png'
import landing2 from '../assets/landing/landing2.png'
import landing3 from '../assets/landing/landing3.png'
import landing4 from '../assets/landing/landing4.png'

export const Landing: React.FC = ({ fRef }: { fRef: HTMLElement }) => {
    return (
        <Container ref={fRef}>
            <Banner>
                <Name>Thunthian Pornmuneewong (PanicP)</Name>
                <Desc>
                    Frontend Developer - from internal websites to
                    customer-facing websites.
                </Desc>
            </Banner>
            <Carousel
                isBackground={true}
                images={[landing1, landing2, landing3, landing4]}
                arrowColor="white"
            />
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    border-bottom: 2px solid white;
`

const Banner = styled.div`
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(211, 211, 211, 0.2);
    padding: 10rem 10rem 10rem 10rem;
    border-radius: 0 20rem 20rem 0;
`

const Name = styled.div`
    font-size: 3rem;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: lightgrey;
`

const Desc = styled.div`
    font-size: 1.5rem;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: lightgrey;
`
