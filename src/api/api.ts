/* Core */
import axios from 'axios';
// import waait from 'waait';

const API_URL = process.env.REACT_APP_API_URL;

/* Instruments */
import { Movie, Filter } from '../types';

export const api = {
    async getMovies(filter: Filter = 'upcoming') {
        const { data: movies } = await axios.get<Movie[]>(
            `${API_URL}/movies?filter=${filter}`,
        );

        // await waait(1000);

        return movies;
    },
};
