/* Core */
import { useQuery } from 'react-query';

/* Instruments */
import { api } from '../api';
import { Movie } from '../types';
import { filterStore } from '../lib/filterStore';

export const useMovies = () => {
    const query = useQuery<Movie[]>(
        [ 'movies', filterStore.selectedFilter ],
        () => api.getMovies(filterStore.selectedFilter),
    );

    return query;
};
