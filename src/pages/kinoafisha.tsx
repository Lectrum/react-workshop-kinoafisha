/* Core */
import { observer } from 'mobx-react-lite';

/* Components */
import { Filter, Movie } from '../components';
import { Logo } from '../theme/icons';

/* Instruments */
import { useMovies } from '../hooks';
import { filterStore } from '../lib/filterStore';

export const Kinoafisha: React.FC = observer(() => {
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
                    <Filter
                        selected = { filterStore.selectedFilter === 'latest' }
                        title = { `Новинки ${new Date().getFullYear()}` }
                        onClick = { () => filterStore.setSelectedFilter('latest') }
                    />
                    <Filter
                        selected = { filterStore.selectedFilter === 'upcoming' }
                        title = 'Скоро в кинотеатрах'
                        onClick = { () => filterStore.setSelectedFilter('upcoming')
                        }
                    />
                    <Filter
                        selected = { filterStore.selectedFilter === 'popular' }
                        title = 'В топ-чартах'
                        onClick = { () => filterStore.setSelectedFilter('popular') }
                    />
                </div>
            </header>

            <section className = 'movies'>{moviesJSX}</section>
        </main>
    );
});
