'use client';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import HomeCard from './homeCard';
import { useEffect, useState } from 'react';

const getPosts = async () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  console.log(baseURL);
  const response = await fetch(`${baseURL}/api/posts`, {
    headers: {
      'Cache-Control': 'no-cache',
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  console.log(data);

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
