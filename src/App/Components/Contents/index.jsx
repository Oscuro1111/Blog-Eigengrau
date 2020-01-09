import React from 'react';
import './styles/Contents.css';
import * as React_Redux from 'react-redux';

import { Trending } from '../Navebar/Components/Options';

const MainContent = () => {
	return (
		<React.Fragment>
			<div className="mainContent">"Main Content"</div>
		</React.Fragment>
	);
};

const Content_P = ({ showContent, showTrending }) => {
	return (
		<div className="containerComponent">
			{showContent && <MainContent />}
			{showTrending && <Trending />}
		</div>
	);
};

const mapStateToProp = state => {
	return {
		showContent: state.MainComponent,
		showTrending: state.TrendingPostsComponent,
	};
};

const Content = React_Redux.connect(mapStateToProp, null)(Content_P);

export default Content;
