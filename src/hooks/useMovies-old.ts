/* Core */
import { useState, useEffect } from 'react';

/* Instruments */
import { api } from '../api';
import { IMovie, UFilter } from '../types';

export const useMovies = (selectedFilter: UFilter = 'upcoming') => {
    const [ movies, setMovies ] = useState<IMovie[]>([]);

    useEffect(() => {
        const getMoviesByFilter = async (nextFilter: UFilter) => {
            const newMovies = await api.getMovies(nextFilter);

            setMovies(newMovies);
        };

        getMoviesByFilter(selectedFilter);
    }, [ selectedFilter ]);

    return { movies };
};
