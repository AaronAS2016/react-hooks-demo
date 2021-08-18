import { useState } from "react"

export const useFetch = (URL) => {
    
    const [result, setResult] = useState({ results: [] });

    const makeRequest = () => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setResult(data))
    }

    return { result, makeRequest }
}