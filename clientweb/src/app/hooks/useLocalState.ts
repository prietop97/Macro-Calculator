import {useState} from 'react'

export function useLocalState<T>(key:string, initialState: T) {
    const [values,setValues] = useState<T>(() => {
        const unParsedValues = localStorage.getItem(key)
        const parsedValues = unParsedValues ? JSON.parse(unParsedValues) : initialState;
        return parsedValues;
    })

    const handleChanges = (state: T) => {
        setValues(state);
        localStorage.setItem(key, JSON.stringify(state));
    }

    return [values,handleChanges]

}