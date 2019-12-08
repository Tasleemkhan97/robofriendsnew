import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import {searchRobots,requestRobots} from './reducer';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
// import App from './App';
// import Card from './Card';

import App from './components/App';

import * as serviceWorker from './serviceWorker';
const logger = createLogger();
const rootReducers =combineReducers({searchRobots,requestRobots});
const store= createStore(rootReducers,applyMiddleware(thunkMiddleware,logger));
 
ReactDOM.render(
	 <Provider store={store}>
	<App /> 
	 </Provider>
	
// <Card  name={robots[0].name} email={robots[0].email} id={robots[0].id} />
// <Card  name={robots[1].name} email={robots[1].email} id={robots[1].id} />
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
