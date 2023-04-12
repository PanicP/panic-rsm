// @ts-nocheck

import { useState, useEffect, useRef } from 'react'

const useInterval = (callback, delay) => {
    const savedCallback = useRef()
    const intervalId = useRef(null)
    const [resetCount, setResetCount] = useState(0)

    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        const tick = () => {
            savedCallback.current()
        }

        if (intervalId.current) {
            clearInterval(intervalId.current)
        }

        if (delay !== null) {
            intervalId.current = setInterval(tick, delay)
        }

        return () => clearInterval(intervalId.current)
    }, [delay, resetCount])

    const resetInterval = () => {
        setResetCount(resetCount + 1)
    }

    return { resetInterval }
}

export default useInterval
