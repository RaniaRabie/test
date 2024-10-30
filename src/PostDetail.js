import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { postId } = useParams();
  return (
    <div>
      <h3>Post Detail for ID: {postId}</h3>
      <p>This is the content for post {postId}.</p>
    </div>
  );
};

export default PostDetail;
