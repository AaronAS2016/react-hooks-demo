import { useEffect } from 'react';
import { useFetch } from './useFetch';



export const useFetchCharachters = (API_URL) => {

    const { result, makeRequest } = useFetch(API_URL);

    useEffect(()=> {
        makeRequest();
    }, [makeRequest])

    return { charachters: result.results  };
}