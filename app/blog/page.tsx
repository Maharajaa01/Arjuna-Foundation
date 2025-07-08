'use client';

import { useEffect, useState } from 'react';

type BlogPost = {
  date: string;
  venue: string;
  image: string;
  description: string;
};

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]') as BlogPost[];
    setPosts(storedPosts);
  }, []);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Blog
        </h1>

        {posts.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No blog posts yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="px-5 py-4 border-b flex justify-between text-sm text-blue-600 font-semibold bg-gray-100">
                  <span>{post.date}</span>
                  <span>{post.venue}</span>
                </div>
                <img
                  src={post.image || 'https://via.placeholder.com/600x400?text=No+Image'}
                  alt="Blog Post"
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <p className="text-gray-700 text-sm">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
