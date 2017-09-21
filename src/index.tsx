import * as React from 'react';
import {reducer, initialState} from './root/reducer';
import {render} from 'react-dom';
import {RootComponent} from './root/RootComponent';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const store = createStore(reducer, initialState, applyMiddleware(logger));

render(
	<Provider store={store} >
		<RootComponent/>
	</Provider>,
	document.getElementById('root')
);
