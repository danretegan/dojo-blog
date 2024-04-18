import BlogList from 'BlogList';
import { useState, useEffect } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(' http://localhost:8000/blogs')
        .then(response => {
          return response.json();
        })
        .then(data => {
          setBlogs(data);
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs:" />}
    </div>
  );
};

export default Home;
