import { useState, useEffect } from 'react'

const useResponsive = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [isTablet, setIsTablet] = useState(false)
    const [isDesktop, setIsDesktop] = useState(false)

    const handleResize = () => {
        const width = window.innerWidth

        if (width < 768) {
            setIsMobile(true)
            setIsTablet(false)
            setIsDesktop(false)
        } else if (width >= 768 && width < 1024) {
            setIsMobile(false)
            setIsTablet(true)
            setIsDesktop(false)
        } else {
            setIsMobile(false)
            setIsTablet(false)
            setIsDesktop(true)
        }
    }

    useEffect(() => {
        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return { isMobile, isTablet, isDesktop }
}

export default useResponsive
