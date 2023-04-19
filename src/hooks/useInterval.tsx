import { useState, useEffect, useRef } from 'react'

const useInterval = (callback: () => any, delay: number | null) => {
    const savedCallback = useRef<any>(null)
    const intervalId = useRef<any>(null)
    const [resetCount, setResetCount] = useState(0)

    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        const tick = () => {
            if (savedCallback) {
                savedCallback.current()
            }
        }

        if (intervalId.current) {
            clearInterval(intervalId.current as number)
        }

        if (delay !== null) {
            intervalId.current = setInterval(tick, delay)
        }

        return () => clearInterval(intervalId.current as number)
    }, [delay, resetCount])

    const resetInterval = () => {
        setResetCount(resetCount + 1)
    }

    return { resetInterval }
}

export default useInterval
