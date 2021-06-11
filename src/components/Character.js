// Write your Character component here
import React from 'react'
import styled, { keyframes } from 'styled-components'

const kf = keyframes`
  50% {
    transform: scale(0.8)
  }
  100% {
    opacity: 1;
    transform: scale(1)
  }
`

const StyledChar = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border-bottom: 2px solid gray;

  background-color: ${props => props.theme.primaryColor};
  color: ${({ theme }) => theme.white};
  
  @media ${({ theme }) => theme.breakpointMobile} {
    width: initial;
  }
  
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${({ theme }) => theme.secondaryColor};
  }
  
  &::before {
    content: "${props => props.besty ? '💚' : '🚀'}"
  }

  transform: scale(2);
  opacity: 1;
  animation: ${kf} 0.3s ease-in-out forwards;
`

const Character = (props) => {
    console.log(props)
    const {user} = props
    return (
        <StyledChar> 
            <div>{user.name}</div>
            <div>{user.birth_year}</div>
        </StyledChar>
    )
}

export default Character;
