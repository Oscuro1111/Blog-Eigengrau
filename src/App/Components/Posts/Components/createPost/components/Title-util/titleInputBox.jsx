import React from 'react';
import './styles/cp_title.css';
export const Cp_TitleInputPost=()=>{
    return (
        <div className="cp_titleInputPost">
          <p className="cp_titleHeading">
              Title of your post 
          </p>
          <div contentEditable={true} spellCheck={false} className="cp_titleContent">
            Hello
          </div>
        </div>
    );
};