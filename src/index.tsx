/* Core */
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

/* Components */
import { App } from './App';

/* Instruments */
import './theme/init.scss';

render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'),
);
