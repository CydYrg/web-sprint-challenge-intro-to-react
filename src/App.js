import React, { useState, useEffect, fetchData } from "react";
import './App.css';
import Character from './components/Character.js';
import axios from "axios";


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("react");
  
  const handleChange = e => {
    setQuery(e.target.value)
    fetchData(); // calls same external function after setting query
  }

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://swapi.dev/api/people" + query)
        .then(res => setData(res.data));
    };
    console.log(data)
    fetchData();
  }, [query]);

  return (
    <div>
      <button onClick={e => setQuery(number + 1)}>search</button>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>
        {data.hits.map(item => (
          //<li key={item.results.name}>
          <li>
            <Character user={data} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
