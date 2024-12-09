// app/api/blog-posts/route.ts
import { NextResponse } from 'next/server';
import { getBlogPosts } from 'app/blog/utils';

export async function GET() {
  const posts = getBlogPosts();
  return NextResponse.json(posts);
}
