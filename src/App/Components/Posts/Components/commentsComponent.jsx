import React, {useState} from 'react';
import './styles/commentComponent.css';
import pic from '../resources/js.png';
import {ReplyList} from './replyComponent'; 
import {ReplyInput} from './ReplyInput/replyInput';
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
	const [state, setState] = useState({ showReply: false,replyInputShow:false });

	const onClick = e => {
		setState({ showReply: !state.showReply });
	};

	const onReply=e=>{
		setState({replyInputShow:!state.replyInputShow});
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
				<span className="c_reply" onClick={onReply}>
					<span className="c_replyBtn far fa-reply"></span>
					<span className="toolTipText">Reply</span>
				</span>
			</div>
			{state.showReply && <ReplyList />}
			{state.replyInputShow&&<ReplyInput />}
		</React.Fragment>
	);
};

 const Comment = () => {
	return (
		<div className="commentComponent">
			<CommentHeader />
			<CommentBody />
			<CommentFooter />
		</div>
	);
};

/**********************************************/

export const CommentList = () => {
	return (
		<div className="commentList">
			<Comment />
		</div>
	);
};
