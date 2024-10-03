// hooks/useFetchData.js
import { useState, useEffect } from 'react';

const useFetchData = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
                console.error('Error fetching data:', error);
            }
            setLoading(false);
        };

        fetchData();
    }, [url]);

    return { data, loading, error, setData, setLoading};
};

export default useFetchData;
