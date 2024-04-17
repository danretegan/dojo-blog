import BlogList from 'BlogList';
import { useState } from 'react';
import { blogs as blogData } from './constants';

const Home = () => {
  const [blogs] = useState(blogData);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs:" />
      <BlogList
        blogs={blogs.filter(blog => blog.author === 'mario')}
        title="Mario's blogs:"
      />
      <BlogList
        blogs={blogs.filter(blog => blog.author === 'yoshi')}
        title="Yoshi's blogs:"
      />
    </div>
  );
};

export default Home;
