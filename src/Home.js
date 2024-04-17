import { useState } from 'react';

const Home = () => {
  // let name = 'Dan';

  const [name, setName] = useState('Dan ');
  const [age, setAge] = useState(35);

  const handleClick = () => {
    setName('Gabriel ');
    setAge(25);
  };

  return (
    <div className="home">
      <h2>Homepage...</h2>

      <p>
        {name} is {age} years old.
      </p>

      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
