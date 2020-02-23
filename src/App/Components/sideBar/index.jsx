import React from 'react';
import './styles/sideBar.css';

import {ToolBar} from '../Posts/Components/createPost/components/Editor-utils/tools/toolBar';

const SideBarComponent= () =>{
    return (
        <div className="sideBarComponent"><ToolBar /></div>
    );
};

export default SideBarComponent;
