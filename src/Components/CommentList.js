import React from 'react';
import CommentItem from './CommentItem';

const CommentList = ({ comments }) => {
    return (
        <div>
            <div className="container">
                <div className="card col-5 p-2 mx-auto mt-3">
                    <h4>Comments</h4>
                    {comments.map((comment) => (
                        <CommentItem key={comment.id} comment={comment} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CommentList;