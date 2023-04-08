// @ts-nocheck

import React, { useState } from 'react'
import styled from 'styled-components'

export const Hamburger = ({ onClick }: { onClick: () => void }) => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
        onClick()
    }

    return (
        <StyledHamburger open={open} onClick={handleClick}>
            <div />
            <div />
            <div />
        </StyledHamburger>
    )
}

const StyledHamburger = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
        outline: none;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background: lightgrey;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :first-child {
            transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
        }

        :nth-child(2) {
            opacity: ${({ open }) => (open ? '0' : '1')};
            transform: ${({ open }) =>
                open ? 'translateX(20px)' : 'translateX(0)'};
        }

        :nth-child(3) {
            transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }
`
