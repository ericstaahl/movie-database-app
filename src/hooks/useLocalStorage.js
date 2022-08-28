import { useEffect, useState } from 'react'

const useLocalStorage = (property, initialValue) => {

    const [savedValue, setSavedValue] = useState(() => localStorage.getItem(property)
        ? JSON.parse(localStorage.getItem(property))
        : null
    )

    if (!savedValue) {
        localStorage.setItem(property, JSON.stringify(initialValue))
    }

    const setValue = (valueToBeSet) => {
        console.log(valueToBeSet)
        if (savedValue) {
            setSavedValue(valueToBeSet)
        }
    }

    useEffect(() => {
        localStorage.setItem(property, JSON.stringify(savedValue))
    }, [savedValue])

    return (
        [savedValue, setValue]
    )
}

export default useLocalStorage