/* Core */
import { useState, useEffect } from 'react';

/* Instruments */
import { api } from '../api';

export const useMovies = (filter = 'upcoming') => {
    const [ movies, setMovies ] = useState(null);

    useEffect(() => {
        const getMoviesByFilter = async (nextFilter) => {
            const newMovies = await api.getMovies(nextFilter);

            setMovies(newMovies);
        };

        getMoviesByFilter(filter);
    }, [ filter ]);

    return { data: movies };
};
