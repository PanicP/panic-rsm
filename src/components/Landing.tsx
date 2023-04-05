import styled from 'styled-components'
import { Carousel } from './Carousel'

export const Landing: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Name>Thunthian Pornmuneewong (PanicP)</Name>
                <Desc>
                    Frontend Developer - from internal websites to
                    customer-facing websites.
                </Desc>
            </Banner>
            <Carousel />
        </Container>
    )
}

const Container = styled.div`
    position: relative;
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
    font-size: 4rem;
`

const Desc = styled.div`
    font-size: 2rem;
`
