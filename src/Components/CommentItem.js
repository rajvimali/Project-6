import React from 'react';
import './style.css'

const CommentItem = ({ comment }) => {
    return (
        <div className="comment">
            <div className="user fs-4">{comment.user}</div>
            <div className="text fs-5">{comment.text}</div>
            <div className="datetime fs-6">{comment.dateTime}</div>
        </div>

    );
};

export default CommentItem;