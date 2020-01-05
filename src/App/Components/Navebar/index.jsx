import React from 'react';

import './styles/naveBar.css';

import {LogoBox} from './Components/LogoBox';
import {Options} from './Components/Options';

const NavBar = () => {
	return (
		<React.Fragment>
			<div className="naveBar">
			  <LogoBox />
			  <Options />
			</div>
		</React.Fragment>
	);
};

export default NavBar;
