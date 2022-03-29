import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';
//import 'semantic-ui-css/semantic.min.css'


ReactDOM.render(
    <Provider store={store}>
    <Fragment> 
       <App />
    </Fragment>
    </Provider>,
 document.getElementById('root'));
