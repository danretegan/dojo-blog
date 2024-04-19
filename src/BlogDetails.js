import { url } from './constants';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useNavigate } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isLoading } = useFetch(url + id);
  const navigate = useNavigate();

  const handleClick = () => {
    //* handleClick: implementam functia fetch pentru stergerea unui blog folosind metoda DELETE. Dupa stergere navigam la pagina Home ('/'):

    fetch(url + blog.id, {
      method: 'DELETE',
    }).then(() => {
      console.log('Blog deleted!');
      navigate('/');
    });
  };

  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>DELETE THIS BLOG</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
