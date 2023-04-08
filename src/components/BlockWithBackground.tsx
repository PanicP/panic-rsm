// @ts-nocheck

import styled from 'styled-components'
import backgroundTile from '../assets/background-tile.png'

export const BlockWithBackground: React.FC = ({
    color,
    children,
    header,
    fRef,
}: {
    color: string
    children: React.ReactNode
    header: string
    fRef: HTMLElement
}) => (
    <Container ref={fRef} color={color}>
        <HeaderContainer>
            <Header>{header}</Header>
        </HeaderContainer>
        {children}
    </Container>
)

const Container = styled.div`
    background-image: url(${backgroundTile});
    background-color: ${({ color }) => color || 'white'};
    border: 2px solid white;
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
`
const Header = styled.div`
    padding: 2rem 0 1rem;
    border-bottom: 2px solid white;
    font-size: 2rem;
    font-weight: bold;
`
