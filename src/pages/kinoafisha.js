/* Core */
import { observer } from 'mobx-react-lite';

/* Components */
import { Movie } from '../components';
import { Logo } from '../theme/icons';

/* Instruments */
import { useMovies } from '../hooks';
import { filterStore } from '../lib/filterStore';

export const Kinoafisha = observer(() => {
    const { data: movies } = useMovies();

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
                    <section
                        className = {
                            filterStore.filter === 'latest' ? 'selected' : ''
                        }
                        onClick = { () => filterStore.setFilter('latest') }>
                        <span>{`Новинки ${new Date().getFullYear()}`}</span>
                    </section>
                    <section
                        className = {
                            filterStore.filter === 'upcoming' ? 'selected' : ''
                        }
                        onClick = { () => filterStore.setFilter('upcoming') }>
                        <span>Скоро в кинотеатрах</span>
                    </section>
                    <section
                        className = {
                            filterStore.filter === 'popular' ? 'selected' : ''
                        }
                        onClick = { () => filterStore.setFilter('popular') }>
                        <span>В топ-чартах</span>
                    </section>
                </div>
            </header>

            <section className = 'movies'>
                {movies === null ? <h1>Загрузка...</h1> : moviesJSX}
            </section>
        </main>
    );
});
