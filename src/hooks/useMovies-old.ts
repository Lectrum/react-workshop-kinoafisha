/* Core */
import { useState, useEffect } from 'react';

/* Instruments */
import { api } from '../api';
import { Movie, Filter } from '../types';

export const useMovies = (selectedFilter: Filter = 'upcoming') => {
    const [ movies, setMovies ] = useState<Movie[]>([]);

    useEffect(() => {
        const getMoviesByFilter = async (nextFilter: Filter) => {
            const newMovies = await api.getMovies(nextFilter);

            setMovies(newMovies);
        };

        getMoviesByFilter(selectedFilter);
    }, [ selectedFilter ]);

    return { movies };
};
