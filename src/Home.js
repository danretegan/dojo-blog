import BlogList from 'BlogList';
import { useState, useEffect } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(' http://localhost:8000/blogs')
        .then(response => {
          console.info(response);
          if (!response.ok) {
            throw Error('Nu am putut obtine datele');
          }
          return response.json();
        })
        .then(data => {
          setBlogs(data);
          setIsLoading(false);
          setError(null);
        })
        .catch(err => {
          console.error(err.message);
          setError(err.message);
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs:" />}
    </div>
  );
};

export default Home;
