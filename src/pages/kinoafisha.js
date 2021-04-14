/* Core */
import { useState } from 'react';

/* Components */
import { Filter, Movie } from '../components';
import { Logo } from '../theme/icons';

/* Instruments */
import { useMovies } from '../hooks';

export const Kinoafisha = () => {
    const [ filter, setFilter ] = useState('upcoming');
    const { data: movies } = useMovies(filter);

    const moviesJSX = movies?.map((movie) => {
        return (
            <Movie
                key = { movie.id }
                movie = { movie }
            />
        );
    });

    return (
        <main>
            <header className = 'header'>
                <Logo />

                <div className = 'filters'>
                    <Filter
                        selected = { filter === 'latest' }
                        title = { `Новинки ${new Date().getFullYear()}` }
                        onClick = { () => setFilter('latest') }
                    />
                    <Filter
                        selected = { filter === 'upcoming' }
                        title = 'Скоро в кинотеатрах'
                        onClick = { () => setFilter('upcoming') }
                    />
                    <Filter
                        selected = { filter === 'popular' }
                        title = 'В топ-чартах'
                        onClick = { () => setFilter('popular') }
                    />
                </div>
            </header>

            <section className = 'movies'>{moviesJSX}</section>
        </main>
    );
};
