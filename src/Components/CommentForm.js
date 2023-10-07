import React, { useState } from 'react';

const CommentForm = ({ addComment }) => {
    const [user, setUser] = useState('');
    const [text, setText] = useState('');
    const [rating, setRating] = useState(0);
    const [userError, setUserError] = useState('');
    const [textError, setTextError] = useState('');
    const [ratingError, setRatingError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!user) {
            setUserError('Username is required');
            return;
        }
        if (!text) {
            setTextError('Comment is required');
            return;
        }

        const dateTime = new Date().toLocaleString();

        addComment({ user, text, dateTime, rating });

        setUser('');
        setText('');
        setRating(0);
        setUserError('');
        setTextError('');
        setRatingError('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="card mx-auto  mt-3 col-5 p-4">
                    <h4 htmlFor="username" className=''>UserName:</h4>
                    <input
                        type="text"
                        id="username"
                        placeholder="User Name"
                        value={user}
                        className='username p-1'
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <span className="error">{userError}</span>
                    <br />

                    <h4 htmlFor="comment">Comment:</h4>
                    <input
                        type='text'
                        id="comment"
                        placeholder="Your Comment"
                        value={text}
                        className='textarea p-1'
                        onChange={(e) => setText(e.target.value)}
                    />
                    <span className="error">{textError}</span>
                    <br />



                    <br />

                    <button type="submit" className='btn btn-success submit'>Add Comment</button>
                </div >
            </div >
        </form>
    );
};

export default CommentForm;
