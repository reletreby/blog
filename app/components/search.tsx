// app/components/Search.tsx
'use client';
import { useState, useEffect } from 'react';

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date();
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}

type BlogPost = {
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
  };
  slug: string;
};

export default function search() {
  const [query, setQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Fetch all posts from the server (adjust the path if necessary)
    fetch('/api/blog-posts')
      .then((res) => res.json())
      .then((data) => setAllPosts(data));
  }, []);

  useEffect(() => {
    // Filter posts based on the query
    if (query.trim() === '') {
      setFilteredPosts([]);
    } else {
      const queryWords = query
        .toLowerCase()
        .split(/\s+/)
        .filter((word) => word.length > 0); // Filter out empty words

      setFilteredPosts(
        allPosts.filter((post) => {
          const titleWords = post.metadata.title
            .toLowerCase()
            .split(/[^a-z0-9]+/); // Split by non-alphanumeric characters
          return queryWords.every((queryWord) =>
            titleWords.includes(queryWord),
          );
        }),
      );
    }
  }, [query, allPosts]);

  return (
    <div className="container mx-auto px-4">
      <input
        type="text"
        placeholder="Search blog posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border rounded w-full mb-4"
      />
      <div>
        {filteredPosts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block mb-6 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800"
          >
            <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 mb-2">
              {post.metadata.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {post.metadata.summary || 'No summary available.'}
            </p>
            <div className="text-xs text-gray-500 dark:text-gray-300">
              <span>Published on: {formatDate(post.metadata.publishedAt)}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
