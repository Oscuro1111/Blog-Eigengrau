import React from 'react';
import './styles/replyInput.css';
export const ReplyInput = ({ r_reply }) => {
	return (
		<div className="c_body replyInput">
			<form className="form-group" action="#">
				<textarea className="form-control" placeholder="Write your reply here...">
					{r_reply && '@' + r_reply.toWhom + '@'}
				</textarea>
				<input className="form-control btn-success" type="submit" value="Reply" />
			</form>
		</div>
	);
};
