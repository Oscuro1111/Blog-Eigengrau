/* eslint-disable no-unused-vars */
import React from 'react'; 
 import {Title} from './components/Title';
 import {Editor} from './components/Editor';
 import {SubmitPost} from './components/SubmitPost';

import './styles/createPost.css';

export const CreatePost = ()=>{
    return (
        <div className="createPost">
          <Title/>
          <Editor />
          <SubmitPost />
        </div>
    );
};