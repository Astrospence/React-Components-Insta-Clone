import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  const comment = comments.map(item => {
    return item.text;
  });

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      <Comment comments={comment}/>
    </div>
  );
};

export default Comments;
