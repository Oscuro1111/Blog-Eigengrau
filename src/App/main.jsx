import React from 'react';

import Root from './Components/Root';

import {Store} from './store';
import {Provider} from 'react-redux';
export default class Main extends React.Component{

    render(){
        return (
             <Provider store={Store}>
             <Root />
             </Provider>
            );
    }
}