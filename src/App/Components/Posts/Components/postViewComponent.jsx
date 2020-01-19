/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './styles/postView.css';
import './styles/commentComponent.css';
import pic from '../resources/js.png';
import {ReplyList} from './replyComponent'; 

const PostHeader = () => {
	return (
		<div className="postHeader">
			<div className="view_postTitle">React Native Hooks and async UI Logics with redux.</div>
			<div className="headerBody">
				<div className="view_postAuthor">
					<img src={pic} className="authorImg" alt="Author" />
					By Oscuro Smith
				</div>
				<div className="view_lastUpdatedDate">Updated on 14 Jan 2020</div>
			</div>
		</div>
	);
};

const PostBody = () => {
	return <div className="postBody"></div>;
};
const InputComment = () => {
	return (
		<div className="inputComment">
			<form action="#" className="form-group">
				<textarea maxLength="500" placeholder="Write your comment..."></textarea>
				<input className="btn-primary" value="Post" type="submit" />
			</form>
		</div>
	);
};

//Comment Component

const CommentHeader = () => {
	return (
		<div className="commentHeader">
			<div className="c_userInfo">
				<img src={pic} className="c_authorImg" alt="user" /> Oscuro Smith
			</div>
			<div className="c_date">Date: Jan 17 ,2020</div>
		</div>
	);
};

const CommentBody = () => {
	return (
		<div className="c_body">
			<p>This post is amazing.</p>
		</div>
	);
};

//*******************************ReplyComponent************************************************* */
const CommentFooter = () => {
	const [state, setState] = useState({ showReply: false });

	const onClick = e => {
		setState({ showReply: !state.showReply });
	};

	return (
		<React.Fragment>
			<div className="c_footer">
				<span className="c_likes">
					<span className="badge badge-secondary">3</span>
					<span className="fas fa-thumbs-up"></span>
				</span>
				<span className="c_comments" onClick={onClick}>
					<span className="badge badge-secondary">0</span>
					<span className="far fa-comment" ></span>
				</span>
				<span className="c_reply">
					<span className="c_replyBtn far fa-reply"></span>
					<span className="toolTipText">Reply</span>
				</span>
			</div>
			{state.showReply && <ReplyList />}
		</React.Fragment>
	);
};

export const Comment = () => {
	return (
		<div className="commentComponent">
			<CommentHeader />
			<CommentBody />
			<CommentFooter />
		</div>
	);
};

/**********************************************/

const CommentList = () => {
	return (
		<div className="commentList">
			<Comment />
		</div>
	);
};

const PostComment = () => {
	return (
		<React.Fragment>
			<div className="postComment">
				<div className="commentHeading">
					<div>Comments</div>
				</div>
			</div>
			<InputComment />
		</React.Fragment>
	);
};

export const PostViewComponent = () => {
	return (
		<React.Fragment>
			<div className="postView">
				<PostHeader />
				<PostBody />
				<PostComment />
				<CommentList />
			</div>
		</React.Fragment>
	);
};
