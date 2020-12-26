import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StatePrivider } from './components/Login/helpers/StatePrivider'
import reducer, { initialState } from './components/Login/helpers/Reducer'
ReactDOM.render(
    <React.StrictMode>
    <StatePrivider initialState={initialState} reducer={reducer}>
            <App />
        </StatePrivider>
    </React.StrictMode>,
    document.getElementById('root')
);
