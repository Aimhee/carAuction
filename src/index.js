import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers';
import {createStore} from 'redux';
//import * as actions from './actions';
import {Provider} from 'react-redux';

//reduce 를 받아오는 스토어
const store = createStore(reducers);

//console.log(store.getState());

ReactDOM.render(
    <Provider store={store}> 
        <App /> 
    </Provider>,
    document.getElementById('root')
);