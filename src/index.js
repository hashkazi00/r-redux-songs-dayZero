import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import reducers from './reducers';
import { App } from './components/App';
import { createStore } from 'redux';

render(
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>
, document.getElementById('root'));