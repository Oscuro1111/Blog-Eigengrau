import React from 'react';

import './styles/replyComponent.css';

import pic from '../resources/js.png';

const ReplyHeader = () => {
	return (
		<div className="commentHeader padding-0-px">
			<div className="c_userInfo">
				<img src={pic} className="c_authorImg" alt="user" /> Oscuro Smith
			</div>
			<div className="c_date">Date: Jan 17 ,2020</div>
		</div>
	);
};

const ReplyBody = () => {
	return (
		<div className="c_body font-size-0-dot-9-rem padding-0-px">
			<span>This post is amazing.</span>
		</div>
	);
};

//*******************************ReplyComponent************************************************* */
const ReplyFooter = () => {


	return (
		<React.Fragment>
			<div className="c_footer">
				<span className="c_likes">
					<span className="badge badge-secondary">3</span>
					<span className="fas fa-thumbs-up"></span>
				</span>
				
				<span className="c_reply">
					<span className="c_replyBtn far fa-reply"></span>
					<span className="toolTipText">Reply</span>
				</span>
			</div>
		</React.Fragment>
	);
};

 const ReplyComment = () => {
	return (
		<div className="replyComponent">
			<ReplyHeader />
			<ReplyBody />
			<ReplyFooter />
		</div>
	);
};


export const ReplyList = () => {
	return (
        <div className="replyList">
           <ReplyComment />
    </div>);
};