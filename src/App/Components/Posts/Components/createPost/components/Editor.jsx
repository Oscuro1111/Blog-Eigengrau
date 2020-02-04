import React from 'react';

import {EditorBox} from './Editor-utils/editor';
export const Editor =()=>{
    return (
        <div className="createPost_editor">
        <p className="cp_postBody">Post Body</p>
          <EditorBox />
        </div>
    );
};