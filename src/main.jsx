import React from 'react'
import ReactDOM from 'react-dom/client'
import Routing from './routes/routing'
import { Provider } from 'react-redux';
import store from './store';

import "./assets/css/common.css"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <Routing />
        </Provider>
    </React.StrictMode>,
)