/* Core */
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const api = {
    async getMovies(filter = 'upcoming') {
        const { data: movies } = await axios.get(
            `${API_URL}/movies?filter=${filter}`,
        );

        return movies;
    },
};
