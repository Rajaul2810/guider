import React from 'react'
import Nav from './navigation/Nav';
import UserContext from './context/UserContext';


export default function App() {

  return (
    <UserContext>
      <Nav />
    </UserContext> 
  );
}


