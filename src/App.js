import React, { useState, useEffect, fetchData } from "react";
import './App.css';
import Character from './components/Character.js'
import axios from "axios"
import {BASE_URL} from './App'
import { response } from "msw"
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${props => props.theme.tertiaryColor};
  &:hover {
    transform: scale(1.2);
  }
  border-radius: 5px;
  padding: 7px;
`

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 12px;
  border-bottom: 2px solid gray;
  `

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`http://swapi.dev/api/people/?page=${page}`)
        .then(res => setData(res.data.results))
        .catch(err => {
          console.log(err)
        })
    };

    fetchData();

    console.log("YESS")
    console.log(data)
    console.log("YESSS BEEEEE")    

  }, [page]);

  const nextPage = () => {
    setPage(page+1)  
  }

  const prevPage = () => {
    setPage(page-1)  
  }  

  return(
    <div> 
      <StyledButtonContainer> 
        <StyledButton onClick={prevPage}>Previous Page</StyledButton>      
        <StyledButton onClick={nextPage}>Next Page</StyledButton>
      </StyledButtonContainer> 
      <ul>
        {data.map(userData => (
          <ul>
            <Character user={userData} />
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default App;
