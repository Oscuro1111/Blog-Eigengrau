import React from 'react';
import './styles/options.css';
import userpic from './resources/userpic.jpg';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const NavOptions=()=>{
  return (
    <div className="naveOptions">
     <span className="opt_span colorBtn">Create Post</span>
     <span className="opt_span btn-primary">Home</span>
     <span className="opt_span btn-primary">Account</span>
      <img src={userpic} className="userPhoto"  alt="userPhoto"/>
    </div>
  );
};

export const Options =()=>{
    return (
        <div className="options">
          <NavOptions />
        </div>
    );
};

