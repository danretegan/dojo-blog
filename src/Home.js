import BlogList from 'BlogList';
import { useState, useEffect } from 'react';
import { blogs as blogData } from './constants';

const Home = () => {
  const [blogs, setBlogs] = useState(blogData);

  const [name, setName] = useState('mario');

  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log('use effect ran!');
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs:" handleDelete={handleDelete} />

      <button onClick={() => setName('luigi')}>Change name</button>

      <p>{name}</p>
    </div>
  );
};

export default Home;
