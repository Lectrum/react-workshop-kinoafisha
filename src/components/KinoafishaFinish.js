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
            <div
                className = 'movie'
                key = { movie.id }>
                <div className = 'poster'>
                    <span className = 'genre'>{movie.genre}</span>
                    <img
                        alt = { movie.title }
                        src = { movie.poster }
                    />
                    <span className = 'rating'>{movie.rating}</span>
                </div>
                <span className = 'title'>{movie.title}</span>
            </div>
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

            <div className = 'content'>{moviesJSX}</div>
        </>
    );
};

const Filter = (props) => {
    return (
        <div
            className = 'filter'
            style = {{ '--outline': props.selected && 'solid' }}
            onClick = { props.onClick }>
            <span>{props.title}</span>
        </div>
    );
};
