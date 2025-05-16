'use client';

import { useState } from 'react';
import { FaSearch, FaCalendar, FaUser, FaTags } from 'react-icons/fa';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  readTime: string;
}

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample blog data (replace with actual data from your backend)
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Getting Started with Web Development',
      excerpt: 'Learn the fundamentals of web development and start your journey as a developer.',
      category: 'Web Development',
      author: 'John Doe',
      date: 'March 15, 2024',
      imageUrl: '/blog/web-dev.jpg',
      readTime: '5 min read'
    },
    {
      id: '2',
      title: 'Understanding Data Science Basics',
      excerpt: 'Explore the fundamental concepts of data science and its applications.',
      category: 'Data Science',
      author: 'Jane Smith',
      date: 'March 14, 2024',
      imageUrl: '/blog/data-science.jpg',
      readTime: '7 min read'
    },
    {
      id: '3',
      title: 'Mobile App Development Trends',
      excerpt: 'Stay updated with the latest trends in mobile app development.',
      category: 'Mobile Development',
      author: 'Mike Johnson',
      date: 'March 13, 2024',
      imageUrl: '/blog/mobile-dev.jpg',
      readTime: '6 min read'
    },
  ];

  const categories = ['all', 'Web Development', 'Data Science', 'Mobile Development', 'Cloud Computing', 'Cybersecurity'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-8">Our Blog</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Stay updated with the latest trends, tutorials, and insights in technology and education.
      </p>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? 'All Categories' : category}
            </option>
          ))}
        </select>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map(post => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200">
              {/* Replace with actual image */}
              <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500" />
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <FaCalendar className="mr-2" />
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 hover:text-blue-600">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <FaUser className="mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center text-sm text-blue-600">
                  <FaTags className="mr-2" />
                  <span>{post.category}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No blog posts found matching your criteria.</p>
        </div>
      )}
    </main>
  );
} 