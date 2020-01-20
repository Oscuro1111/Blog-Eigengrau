/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './styles/postView.css';
import pic from '../resources/js.png';
import { CommentList } from './commentsComponent';

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
