'use client';

import { useState, useEffect } from 'react';
import ImageUploader from '../../components/ImageUploader'; // ✅ Update path if needed

type BlogPost = {
  date: string;
  venue: string;
  image: string;
  description: string;
};

export default function Admin() {
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState('');
  const [form, setForm] = useState<BlogPost>({
    date: '',
    venue: '',
    image: '',
    description: '',
  });
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('blogPosts') || '[]') as BlogPost[];
    setPosts(saved);
  }, []);

  const handleLogin = () => {
    if (password === 'admin123') {
      setAuth(true);
    } else {
      alert('Wrong password');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.image) {
      alert('Please upload an image.');
      return;
    }
    const updated = [...posts, form];
    localStorage.setItem('blogPosts', JSON.stringify(updated));
    setPosts(updated);
    setForm({ date: '', venue: '', image: '', description: '' });
  };

  const handleDelete = (index: number) => {
    const updated = posts.filter((_, i) => i !== index);
    localStorage.setItem('blogPosts', JSON.stringify(updated));
    setPosts(updated);
  };

  if (!auth) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded shadow w-80">
          <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 mb-4 rounded"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-white min-h-screen">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Add New Blog Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Venue</label>
            <input
              type="text"
              placeholder="Venue"
              value={form.venue}
              onChange={(e) => setForm({ ...form, venue: e.target.value })}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

<div className="flex flex-col space-y-2">
  <label className="text-sm font-medium text-gray-700">Upload Image *</label>
<ImageUploader
  onUpload={(url) => setForm({ ...form, image: url })}
  currentImage={form.image}
  clearImage={() => setForm({ ...form, image: '' })}
/>
  {form.image === '' && (
    <p className="text-red-500 text-sm">Please upload an image.</p>
  )}
</div>

          <div>
            <label className="text-sm font-medium text-gray-700">Description</label>
            <textarea
              placeholder="Description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full border px-3 py-2 rounded h-28"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Post Blog
          </button>
        </form>

        <hr className="my-10" />

        <h3 className="text-xl font-bold mb-4">Existing Posts</h3>
        {posts.length === 0 ? (
          <p className="text-gray-500 italic text-sm">No posts yet.</p>
        ) : (
          posts.map((post, i) => (
            <div key={i} className="mb-6 border p-4 rounded bg-gray-50">
              <div className="flex justify-between text-sm text-blue-500 mb-2">
                <span>{post.date}</span>
                <span>{post.venue}</span>
              </div>
                {post.image && (
                  <img
                    src={post.image}
                    className="w-full h-48 object-cover rounded mb-2"
                    alt="Blog post image"
                  />
                )}

              <p className="text-sm text-gray-700 mb-2">{post.description}</p>
              <button
                onClick={() => handleDelete(i)}
                className="text-red-600 hover:underline text-sm"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
