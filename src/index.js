import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './Redux/state'

window.try_render = setInterval(function ()
{
    if (window.can_render)
    {
        console.log('YES I CAN RENDER NOW FINALLY!!!!!!!!');
        ReactDOM.render(
            <React.StrictMode>
                <App AppState={state}/>
            </React.StrictMode>,
            document.getElementById('root')
        );
        clearInterval(window.try_render);
        window.try_render = undefined;
        console.log(state);
    }
    else
    {
        console.log('cannot render!!!!!');
    }
}, 200);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
