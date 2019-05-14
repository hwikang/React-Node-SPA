import React from 'react';
import ReactDOM from 'react-dom';
//react -redux 을 붙여줌
import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux';


import App from './components/App';
import reducers from './reducers';
                        //reducer ,state , 
const store =createStore(reducers,{}, applyMiddleware());

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.querySelector('#root')
    );
