import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

type tModalProps = {
    children: React.ReactNode
    onClose: () => any
    isOpen: boolean
}

type tBackdropProps = {
    isOpen: boolean
}
const Modal = ({ children, onClose, isOpen }: tModalProps) => {
    return (
        <>
            <Backdrop onClick={onClose} isOpen={isOpen} />
            {isOpen && <ModalWrapper>{children}</ModalWrapper>}
        </>
    )
}

export default Modal

const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem;
    background-color: #242424;
    border-radius: 10px;
    z-index: 500;
    max-height: 75vh;
    overflow-y: auto;
`

const Backdrop = styled.div<tBackdropProps>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 499;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;
`
