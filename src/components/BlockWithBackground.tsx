import styled from 'styled-components'
import backgroundTile from '../assets/background-tile.png'

export const BlockWithBackground: React.FC = ({
    color,
    children,
}: {
    color: string
    children: React.ReactNode
}) => <Container color={color}>{children}</Container>

const Container = styled.div`
    background-image: url(${backgroundTile});
    background-color: ${({ color }) => color || 'white'};
`

const Desc = styled.div``
