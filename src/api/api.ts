/* Core */
import axios from 'axios';
// import waait from 'waait';

const API_URL = process.env.REACT_APP_API_URL;

/* Instruments */
import { IMovie } from '../types';

export const api = {
    async getMovies(filter = 'upcoming') {
        const { data: movies } = await axios.get<IMovie[]>(
            `${API_URL}/movies?filter=${filter}`,
        );

        // await waait(1000);

        return movies;
    },
};
