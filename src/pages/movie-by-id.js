/* Core */
import { useParams, Link } from 'react-router-dom';

/* Components */
import { Logo } from '../theme/icons';

/* Instruments */
import { useMovieById } from '../hooks';

export const MovieById = () => {
    const params = useParams();
    const { data: movieToView } = useMovieById(params.id);

    const movieToViewJSX = movieToView && (
        <section className = 'movie-view'>
            <img src = { movieToView?.poster } />
            <div>
                <h1>{movieToView?.title}</h1>
                <p>Жанр: {movieToView?.genre}</p>
                <p>Рейтинг: {movieToView?.rating}</p>
            </div>
        </section>
    );

    return (
        <main>
            <Logo />

            <Link to = '..'>&larr; Назад</Link>

            {movieToView === null && <h1>Загрузка...</h1>}

            {movieToViewJSX}
        </main>
    );
};
