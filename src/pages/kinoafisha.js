/* Core */
import { useState, useEffect } from 'react';

/* Instruments */
import { api } from '../api';

export const Kinoafisha = () => {
    const [ selectedFilter, setSelectedFilter ] = useState('upcoming');
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        const _getMoviesByFilter = async (nextFilter) => {
            const newMovies = await api.getMovies(nextFilter);

            setMovies(newMovies);
        };

        _getMoviesByFilter(selectedFilter);
    }, [ selectedFilter ]);

    const moviesJSX = movies.map((movie) => {
        return (
            <article key = { movie.id }>
                <h1>{movie.genre}</h1>
                <img
                    alt = { movie.title }
                    src = { movie.poster }
                />
                <footer>
                    <h1>{movie.title}</h1>
                    <code>{movie.rating}</code>
                </footer>
            </article>
        );
    });

    return (
        <>
            <div className = 'header'>
                <div className = 'logo' />
                <div className = 'filters'>
                    <Filter
                        selected = { selectedFilter === 'latest' }
                        title = { `Новинки ${new Date().getFullYear()}` }
                        onClick = { () => setSelectedFilter('latest') }
                    />
                    <Filter
                        selected = { selectedFilter === 'upcoming' }
                        title = 'Скоро в кинотеатрах'
                        onClick = { () => setSelectedFilter('upcoming') }
                    />
                    <Filter
                        selected = { selectedFilter === 'popular' }
                        title = 'В топ-чартах'
                        onClick = { () => setSelectedFilter('popular') }
                    />
                </div>
            </div>

            <div className = 'movies'>{moviesJSX}</div>
        </>
    );
};

const Filter = (props) => {
    return (
        <section
            style = {{ '--outline': props.selected && 'solid' }}
            onClick = { props.onClick }>
            <span>{props.title}</span>
        </section>
    );
};
