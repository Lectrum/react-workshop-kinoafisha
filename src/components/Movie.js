/* Core */
import { Link } from 'react-router-dom';

export const Movie = (props) => {
    return (
        <Link to = { `/movies/${props.movie.id}` }>
            <article>
                <h1>{props.movie.genre}</h1>
                <img
                    alt = { props.movie.title }
                    src = { props.movie.poster }
                />
                <footer>
                    <h1>{props.movie.title}</h1>
                    <code>{props.movie.rating}</code>
                </footer>
            </article>
        </Link>
    );
};
