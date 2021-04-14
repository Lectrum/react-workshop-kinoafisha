/* Core */
import { useState, useEffect } from 'react';

/* Instruments */
import { api } from '../api';
import { filterStore } from '../lib/filterStore';

export const useMovies = () => {
    const [ movies, setMovies ] = useState(null);

    useEffect(() => {
        const getMoviesByFilter = async () => {
            const newMovies = await api.getMovies(filterStore.filter);

            setMovies(newMovies);
        };

        getMoviesByFilter();
    }, [ filterStore.filter ]);

    return { data: movies };
};
