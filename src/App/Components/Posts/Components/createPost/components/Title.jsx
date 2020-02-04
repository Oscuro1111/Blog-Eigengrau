/* eslint-disable react/jsx-pascal-case */
import React from 'react';

import '../styles/cp_title.css';
import {Cp_TitleInputPost} from './Title-util/titleInputBox';
export const Title=()=>{
    return (
    <div  className="createPost_title">
       <Cp_TitleInputPost />
    </div>
    );
};