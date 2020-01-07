import React, { useState } from 'react';
import './styles/logo.css';
import Logo from './code.svg';
import LogoMobile from './styles/code.svg';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const LogoComponent = ({ logo }) => {
	return (
		<div className="logoBox">
			<img src={logo || Logo} alt="logo" />
			<span className="logoName">EIGENGRAU</span>
			<span className="discription">Tech Blog By Oscuro Smith</span>
		</div>
	);
};

export const LogoBox = (logoComponent => {
	var initialLogo = window.innerWidth > 609 ? Logo : LogoMobile;

	var matchMediaHandler = window.matchMedia('(max-width:660px)');

	var applyLogo = stateChanger => match => {
		if (match.matches) {
			stateChanger({ logo: LogoMobile });
		} else {
			stateChanger({ logo: Logo });
		}
	}; 

	return () => {
		const [state, setState] = useState({ logo: null, mediaHandler: null });

		if (state.mediaHandler === null) {
			setState({ mediaHandler: matchMediaHandler.addListener(applyLogo(setState)) });
		}

		return (
			<React.Fragment>
				<LogoComponent logo={state.logo || initialLogo} />
			</React.Fragment>
		);
	};
})(LogoComponent);
