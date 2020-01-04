import React from 'react';
import './styles/root.css';

import Content from '../Contents';
import NavBar from '../Navebar';
import SideBarComponent from '../sideBar';

export default class Root extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="rootContainer">
					<div className="Heading">
						<NavBar />
					</div>
					<div className="Content">
						<Content />
					</div>
					<div className="sideBar">
            <SideBarComponent />
          </div>
					<div className="footer">footer</div>
				</div>
			</React.Fragment>
		);
	}
}
