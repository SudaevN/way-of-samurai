import React from 'react';
import * as serviceWorker from './serviceWorker';
import state from "./redux/state";
import {reranderEntireTree} from "./render";

reranderEntireTree(state);

serviceWorker.unregister();
