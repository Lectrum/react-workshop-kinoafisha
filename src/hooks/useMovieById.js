/* Core */
import { useState, useEffect } from 'react';

/* Instruments */
import { api } from '../api';

export const useMovieById = (id) => {
    const [ movie, setMovie ] = useState(null);

    useEffect(() => {
        const getMovieById = async () => {
            const newMovies = await api.getMovieById(id);

            setMovie(newMovies);
        };

        getMovieById();
    }, [ id ]);

    return { data: movie };
};
