/* Core */
import { Routes, Route, Navigate } from 'react-router-dom';

/* Components */
import { Kinoafisha } from './pages/kinoafisha';
import { MovieById } from './pages/movie-by-id';

export const App = () => {
    return (
        <Routes>
            <Route
                element = { <Kinoafisha /> }
                path = '/movies'
            />
            <Route
                element = { <MovieById /> }
                path = '/movies/:id'
            />

            <Route
                element = { <Navigate to = '/movies' /> }
                path = '*'
            />
        </Routes>
    );
};
