/* Core */
import { useQuery } from 'react-query';

/* Instruments */
import { IMovie } from '../types';
import { filterStore } from '../lib/filterStore';

export const useMovies = () => {
    const query = useQuery<IMovie[]>(
        `/movies?filter=${filterStore.selectedFilter}`,
        {
            initialData: [],
        },
    );

    return query;
};
