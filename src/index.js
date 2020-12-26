import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from './components/Login/helpers/Provider.js'
import reducer, { initialState } from './components/Login/helpers/reducer'
ReactDOM.render(
    <React.StrictMode>
        <Provider initialState={initialState} reducer={reducer}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);