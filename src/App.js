import React from 'react';
import './App.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import styled from 'styled-components';


const AppStyled = styled.main`
  /* background: #111f43; */
  background-image: radial-gradient(circle at top, #1F3757 20%, #131537 100%);
  font-family: 'Barlow Semi Condensed', sans-serif;
  min-height: 100vh;
  padding: 2em;
`;

function App() {
  return (
    <AppStyled>
      <Wrapper>
        <Header/>
      </Wrapper>
    </AppStyled>
  );
}

export default App;
