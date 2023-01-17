import { useEffect, useState } from 'react';
import { fetchBlogs } from '../services/getBlogs.js';

export function useBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchBlogs();
      console.log('resp', resp);
      setBlogs(resp);
    };
    fetchData();
  }, []);
  return blogs;
}
