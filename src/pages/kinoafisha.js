/* Core */
import { useState } from 'react';

/* Components */
import { Filter, Movie } from '../components';
import { Logo } from '../theme/icons';

/* Instruments */
import { useMovies } from '../hooks';

export const Kinoafisha = () => {
    const [ selectedFilter, setSelectedFilter ] = useState('upcoming');
    const [ movies ] = useMovies(selectedFilter);

    const moviesJSX = movies.map((movie) => {
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
            </header>

            <section className = 'movies'>{moviesJSX}</section>
        </main>
    );
};
