import React from 'react';
import {render} from 'react-dom';

const App = () => {
    return <h1>Hola Mundo!</h1>
}

render(
    <App/>,
    document.getElementById('app')
);

