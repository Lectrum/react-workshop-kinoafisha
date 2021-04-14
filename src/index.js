/* Core */
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

/* Components */
import { App } from './App';

/* Instruments */
import './theme/init.scss';

const client = new QueryClient();

render(
    <QueryClientProvider client = { client }>
        <Router>
            <App />
        </Router>
        <ReactQueryDevtools initialIsOpen = { false } />
    </QueryClientProvider>,
    document.getElementById('root'),
);
