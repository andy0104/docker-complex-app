import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Fib = () => {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState('');

  const fetchValues = () => {

  }

  const fetchIndexes = () => {

  }

  const handleChange = (event) => {
    setIndex(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Index value submitted');
  }

  useEffect(() => {
    fetchValues();
    fetchIndexes();    
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter Index: </label>
        <input 
          name="index"
          value={index}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <h3>Indexes I have seen:</h3>

      <h3>Calculated values:</h3>
    </div>
  );
};

export default Fib;