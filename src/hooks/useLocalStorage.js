import { useEffect, useState } from 'react'

const useLocalStorage = () => {

    const [timeFrame, setTimeFrame] = useState(() => localStorage.getItem("timeFrame")
        ? JSON.parse((localStorage.getItem("timeFrame")))
        : "day"
    )
    
    const handleSetTimeFrame = () => {
        timeFrame === "day"
            ? setTimeFrame("week")
            : setTimeFrame("day")
    }

    useEffect(() => {
        if (timeFrame) {
            localStorage.setItem("timeFrame", JSON.stringify(timeFrame))
        }
    }, [timeFrame])

    return (
        [timeFrame, handleSetTimeFrame]
    )
}

export default useLocalStorage