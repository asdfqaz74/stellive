import { Post } from '@/lib/models';
import { connectToDb } from '@/lib/utils';
import { NextResponse } from 'next/server';

export const GET = async (req) => {
  try {
    console.log('connecting to db...');
    await connectToDb();
    console.log('fetching posts...');

    const posts = await Post.find();
    console.log('Fetched posts: ', posts);
    return new NextResponse(JSON.stringify(posts), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: '0',
      },
    });
  } catch (err) {
    console.log('message : ', err);
    return new NextResponse(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
};
