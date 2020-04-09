import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addMessage} from "./redux/state";

export let reranderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addMessage={addMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};