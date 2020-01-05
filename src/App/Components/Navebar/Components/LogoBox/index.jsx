import React from 'react';
import './styles/logo.css';
import Logo from './code.svg';
export const LogoBox =()=>{
    return (
      <div className="logoBox">
        <img src={Logo} alt="logo"/><span className="logoName">EIGENGRAU</span><span className="discription">Tech Blog By Oscuro Smith</span>
       </div>
    );
};