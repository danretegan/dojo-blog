import BlogList from 'BlogList';
import useFetch from 'useFetch';

const url = 'http://localhost:8000/blogs';

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch(url);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs:" />}
    </div>
  );
};

export default Home;
