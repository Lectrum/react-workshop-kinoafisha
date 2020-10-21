import { config } from './config';

export default new class Api {
    getMovies = async (filter = 'upcoming') => {
        const response = await fetch(`${config.BASE_URI}/movies?filter=${filter}`);
        const result = await response.json();

        return result;
    };
}();
