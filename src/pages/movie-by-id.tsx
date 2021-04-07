/* Core */
import { useParams, Link } from 'react-router-dom';

/* Components */
import { Logo } from '../theme/icons';

/* Instruments */
import { useMovies } from '../hooks';

export const MovieById: React.FC = () => {
    const params = useParams();
    const { movies } = useMovies();

    const movieToView = movies.find((movie) => movie.id === params.id);

    return (
        <main>
            <Logo />

            <Link to = '..'>&larr; Назад</Link>

            <section className = 'movie-view'>
                <img src = { movieToView?.poster } />
                <div>
                    <h1>{movieToView?.title}</h1>
                    <p>Жанр: {movieToView?.genre}</p>
                    <p>Рейтинг: {movieToView?.rating}</p>
                </div>
            </section>
        </main>
    );
};
