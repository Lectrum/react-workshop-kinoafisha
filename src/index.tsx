/* Core */
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

/* Components */
import { App } from './App';

/* Instruments */
import './theme/init.scss';
import { queryClient } from './lib/queryClient';

render(
    <QueryClientProvider client = { queryClient }>
        <Router>
            <App />
        </Router>
        <ReactQueryDevtools initialIsOpen = { false } />
    </QueryClientProvider>,
    document.getElementById('root'),
);
