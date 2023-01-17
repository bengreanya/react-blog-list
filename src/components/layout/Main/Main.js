import React from 'react';
import { useBlogs } from '../../../hooks/useBlogs.js';
import BlogCard from '../../BlogCard/BlogCard.js';

export default function Main() {
  const blogs = useBlogs();
  return (
    <main>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </main>
  );
}
