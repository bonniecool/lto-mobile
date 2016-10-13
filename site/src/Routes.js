import React from 'react';
import { Provider } from 'react-redux';
import { 
	IndexRoute, 
	Router, 
	Route, 
	browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './Stores';
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

import Layout from './Layout';

import Login from './pages/login';

//PAGE
import App from './App';
import Search from './pages/search';
import Scan from './pages/scan';

export const Routes = () =>{

	const hasLogin = sessionStorage.getItem('user') || false;


	return(
		<Provider store={ store }>
			<Router history={ history } onUpdate={()=>{ window.scrollTo(0,0);}}>
				<Route path="/" component={ Layout }>
					<IndexRoute component={ App }/>
					<Route path="/search" component={ Search }/>
					<Route path="/scan" component={ Scan }/>
				</Route>
			</Router>
		</Provider>
	)
}