import { useState } from 'react';
import PostCard from '../components/blog/PostCard';
import SearchTerminal from '../components/blog/SearchTerminal';
import BlogHeader from '../components/blog/BlogHeader';
import { blogPosts, BlogPost } from '../utils/blogData';
import '../styles/blog.css';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredPosts = blogPosts.filter((post: BlogPost) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.preview.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="blog-container">
      <BlogHeader />
      <SearchTerminal onSearch={setSearchTerm} />
      <div className="post-grid">
        {filteredPosts.map((post: BlogPost, index: number) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
}
