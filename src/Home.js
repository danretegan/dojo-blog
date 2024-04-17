import BlogList from 'BlogList';
import { useState } from 'react';
import { blogs as blogData } from './constants';

const Home = () => {
  const [blogs, setBlogs] = useState(blogData);

  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs:" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
