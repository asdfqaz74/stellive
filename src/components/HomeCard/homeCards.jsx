'use client';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import HomeCard from './homeCard';
import { useEffect, useState } from 'react';

const getPosts = async () => {
  const response = await fetch('http://localhost:3000/api/posts');

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

export default function HomeCards() {
  const [posts, setPosts] = useState([]);

  // FETCHING DATA WITH MONGODB
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);

  // USE INTERSECTION OBSERVER
  const elementRef = useIntersectionObserver({ threshold: 0.5 });

  return (
    <div
      ref={elementRef}
      className="flex items-center justify-center gap-x-24 mt-20 opacity-0"
    >
      {posts.map((post) => (
        <HomeCard key={post._id} post={post} />
      ))}
    </div>
  );
}
