/* eslint-disable no-unused-vars */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './styles/options.css';
import userpic from './resources/userpic.jpg';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


const ListView = () => {
	var btn=null;
	var sideBar =null;
	 const [state, setState]= useState({show:null});
	 
	const closeNav = (e) => {

		setState({show:false});
	};

	const openBtn = (e) => {
			 setState({show:true});
			
	};

	return (
		<React.Fragment>
			{state.show&&<div   className="sidePanel1">
				<a href="javascript:void(0)" className="closeBtn" onClick={closeNav}>
					×
				</a>
				<br />
				<img src={userpic} className="userPhoto" alt="userPhoto" />
				<a href="#">About</a>
				<a href="#">Account</a>
				<a href="#">Home</a>
				<a href="#">Create Post</a>
				<a href="#">Trending</a>
			</div>}
	{(!state.show)&&<button ref={r=>btn=r} className="openBtn" onClick={openBtn}>
				☰Options
			</button>}
		</React.Fragment>
	);
};

const NavOptions = () => {
	return (
		<div className="naveOptions">
			<span className="opt_span colorBtn">Create Post</span>
			<span className="opt_span btn-primary">Home</span>
			<span className="opt_span btn-primary">Account</span>
			<img src={userpic} className="userPhoto" alt="userPhoto" />
		</div>
	);
};

const ListMenu = () => (
	<div className="optionsList">
		<ListView />
	</div>
);

const InlineOptions = () => (
	<div className="options">
		<NavOptions />
	</div>
);
export const Options = (_ => {
	var initialState = window.innerWidth > 609 ? true : false;

	var matchMediaHandler = window.matchMedia('(max-width:666px)');

	var applyChange = stateChanger => match => {
		if (match.matches) {
			stateChanger({ mobileView: true, view: false });
		} else {
			stateChanger({ view: true, mobileView: false });
		}
	};

	return () => {
		const [state, setState] = useState({ view: null, mobileView: null, mediaHandler: null });

		if (state.mediaHandler === null) {
			setState({ mediaHandler: matchMediaHandler.addListener(applyChange(setState)) });
		}

		return (
			<React.Fragment>
				{(state.mobileView && <ListMenu />) ||
					(state.view && <InlineOptions />) ||
					(initialState ? <InlineOptions /> : <ListMenu />)}
			</React.Fragment>
		);
	};
})();
