import { useState } from 'react'

const useLocalStorage = (property, initialValue) => {

    // Needs to be stateful for it to work in TrendingPage
    // If the value recieved from Local Storage is truhty, parse the item and set it to state. 
    // Else set state to null.
    const [savedValue, setSavedValue] = useState(() => localStorage.getItem(property)
        ? JSON.parse(localStorage.getItem(property))
        : null
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
            setSavedValue(valueToBeSet)
            localStorage.setItem(property, JSON.stringify(savedValue))
        }
    }

    return (
        [savedValue, setValue]
    )
}

export default useLocalStorage