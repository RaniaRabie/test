import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Posts from './Posts';
import PostDetail from './PostDetail';

const BlogLayout = () => {
  return (
    <div>
      <h2>Blog Section</h2>
      <Routes>
        <Route path="posts" element={<Posts />} />
        <Route path=":postId" element={<PostDetail />} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default BlogLayout;
