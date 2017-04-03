import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={{store: 'test'}}/>, root);
});
