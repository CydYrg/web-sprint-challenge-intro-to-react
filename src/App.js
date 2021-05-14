import React, { useState, useEffect, fetchData } from "react"
import './App.css'
import Character from './components/Character.js'
import axios from "axios"
import {BASE_URL} from './App'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState([]);
 

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://swapi.dev/api/people")
        .then(res => {
          console.log(res)
          return res
        })
        .then(res => setData(res.data));
    };
    
    fetchData();
  }, []);

  return(
    <div>
      <ul>
        {data.map(userData => (
          <li>
            <Character user={userData} />
          </li>
        ))}
      </ul>
    </div>
  );

  // return (
  //   <div>
  //     <button onClick={e => setQuery(1)}>search</button>
  //     <input value={query} onChange={e => setQuery(e.target.value)} />
  //     <ul>
  //       {data.map(item => (
          
  //         <li>
  //           <Character user={res. data} />
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}

export default App;
