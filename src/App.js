import React, { useState } from 'react'
import CommentForm from './Components/CommentForm'
import CommentList from './Components/CommentList';

const App = () => {

  const [comments, setComments] = useState([]);

  const addComment = (comment) => {

    setComments([...comments, comment]);
  };
  return (
    <>
      <div className="App">
        <CommentForm addComment={addComment} />
        <CommentList comments={comments} />
      </div>
    </>
  )
}

export default App