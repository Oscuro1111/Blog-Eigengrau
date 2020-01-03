import React from 'react';
import  './styles/root.css';

export default class Root extends React.Component{
    render(){

        return (<React.Fragment>
          <div className="rootContainer">
            <div className="post">rootContainer</div>
          </div>
        </React.Fragment>);
    }
} 