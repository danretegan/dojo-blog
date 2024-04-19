import { url } from './constants';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    const blog = { title, body, author };
    setIsLoading(true);

    //* handleSubmit: implementam functia fetch pentru adaugarea unui blog folosind metoda POST. Dupa adaugare navigam la pagina Home ('/'):
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('New blog added!');
      setIsLoading(false);
      navigate('/');
    });
  };

  return (
    <div className="create">
      <h2>Add a new blog:</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={evt => setTitle(evt.target.value)}
        />

        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={evt => setBody(evt.target.value)}
        ></textarea>

        <label>Blog author:</label>
        <select value={author} onChange={evt => setAuthor(evt.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>

        {/* //*Buton cu functie loading: */}
        {!isLoading && <button>Add blog!</button>}
        {isLoading && <button disabled>Adding blog...</button>}

        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
