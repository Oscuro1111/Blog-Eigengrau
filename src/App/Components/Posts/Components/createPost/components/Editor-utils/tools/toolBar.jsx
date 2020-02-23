import React from 'react';
import './styles/toolbar.css';
import {ColorSelector} from '../ToolHandler/ColorSelector';
export const ToolBar=()=>{
    return(
        <div className="cp_toolBar">
            <div className="editTools">
              <ColorSelector/>              
            </div>
        </div>
    );
};