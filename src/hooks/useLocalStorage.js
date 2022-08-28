import { useState } from 'react'

const useLocalStorage = (property, initialValue) => {

    const [savedValue, setSavedValue] = useState(() => localStorage.getItem(property)
        ? JSON.parse(localStorage.getItem(property))
        : null
    )

    if (!savedValue) {
        localStorage.setItem(property, JSON.stringify(initialValue))
    }

    const setValue = (valueToBeSet) => {
        if (savedValue) {
            console.log("Value to be set: ", valueToBeSet)
            setSavedValue(valueToBeSet)
            localStorage.setItem(property, JSON.stringify(savedValue))
        }
    }

    return (
        [savedValue, setValue]
    )
}

export default useLocalStorage