import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Fib = () => {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState('');

  const fetchValues = async () => {
    const allValues = await axios.get('/api/values/current');
    console.log(allValues.data);
    setValues(allValues.data);
  }

  const fetchIndexes = async () => {
    const response = await axios.get('/api/values/all');    
    const indexes = response.data.map((data) => {
      return data.number
    }).join(',');
    setSeenIndexes(indexes);
  }

  const renderCalculatedValues = () => {
    const renderJsx = Object.keys(values).map(key => {
      return (<div key={key}>
        <p>For index {key}, I calculated {values[key]}</p>
      </div>)
    });

    return renderJsx;
  }

  const handleChange = (event) => {
    setIndex(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Index value submitted');
    const response = await axios.post('/api/values', { index });
    setIndex('');
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
      { seenIndexes }

      <h3>Calculated values:</h3>
      { renderCalculatedValues() }
    </div>
  );
};

export default Fib;