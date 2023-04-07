import { useEffect, useState } from 'react'

function useScrollbar() {
    const [scrollbarWidth, setScrollbarWidth] = useState(0)

    useEffect(() => {
        const div = document.createElement('div')
        div.style.position = 'absolute'
        div.style.top = '-9999px'
        div.style.width = '50px'
        div.style.height = '50px'
        div.style.overflow = 'scroll'
        document.body.appendChild(div)

        const scrollbarWidth = div.offsetWidth - div.clientWidth
        document.body.removeChild(div)

        setScrollbarWidth(scrollbarWidth)
    }, [])

    return [scrollbarWidth]
}

export default useScrollbar
