import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import StarnetApp from "./App";

ReactDOM.render(
    <React.StrictMode>
        <StarnetApp />
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();