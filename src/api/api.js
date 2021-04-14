/* Core */
import axios from 'axios';
import waait from 'waait';

const API_URL = process.env.REACT_APP_API_URL;

export const api = {
    async getMovies(filter = 'upcoming') {
        const { data: movies } = await axios.get(
            `${API_URL}/movies?filter=${filter}`,
        );

        await waait(1000);

        return movies;
    },

    async getMovieById(id) {
        const { data: movie } = await axios.get(`${API_URL}/movies/${id}`);

        await waait(1000);

        return movie;
    },
};
