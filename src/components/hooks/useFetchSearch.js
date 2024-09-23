import { useState, useEffect } from 'react';

export const useFetchSearch = (search_term) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://localhost/escape-desarrollo-backend/public/api/companies/search?name=${search_term}`);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false);
        };

        if (search_term) {
            fetchData();
        }
    }, [search_term]);

    return { data, loading, setData, setLoading };
};
