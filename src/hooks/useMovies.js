/* Core */
import { useState, useEffect } from 'react';

/* Instruments */
import { api } from '../api';

export const useMovies = (selectedFilter) => {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        const getMoviesByFilter = async (nextFilter) => {
            const newMovies = await api.getMovies(nextFilter);

            setMovies(newMovies);
        };

        getMoviesByFilter(selectedFilter);
    }, [ selectedFilter ]);

    return [ movies, setMovies ];
};
