import axios from 'axios';
import { useEffect, useState } from 'react';

axios.defaults.baseURL = "https://opentdb.com/"

const useAxios = ({ url }) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        async function fetchData() {
            try {
                let res = await axios.get(url)
                setResponse(res.data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])

    return { response, error, loading }
};

export default useAxios;