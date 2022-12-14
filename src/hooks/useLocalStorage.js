import { useState } from 'react'

const useLocalStorage = (property, initialValue) => {

    // Needs to be stateful for it to work in TrendingPage
    // If the value recieved from Local Storage is truthy, parse the item and set it to state. 
    // Else set state to initialValue.
    const [savedValue, setSavedValue] = useState(() => localStorage.getItem(property)
        ? JSON.parse(localStorage.getItem(property))
        : initialValue
    )

    if (!savedValue) {
        // Set the initial value if no value was found in Local Storage.
        localStorage.setItem(property, JSON.stringify(initialValue))
    }

    const setValue = (valueToBeSet) => {
        // Set the value of the item in Local Storage to the value recieved (if truthy).
        // Also set state. 
        if (valueToBeSet) {
            console.log("Value to be set: ", valueToBeSet)
            localStorage.setItem(property, JSON.stringify(valueToBeSet))
            setSavedValue(valueToBeSet)
        }
    }

    return (
        [savedValue, setValue]
    )
}

export default useLocalStorage