import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function Welcome(){
    return <h1>Functional Return JSX</h1>
}
ReactDOM.render(<Welcome />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();