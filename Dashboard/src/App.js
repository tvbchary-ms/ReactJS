import React from 'react'
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Home from './pages/Home';

const Container = styled.div `
  display: flex;
  height: auto;
  overflow-x: hidden;
`;


const App = () => {
  return (
    <div>
      <Topbar/>
      <Container>
        <Sidebar/>
        <Home/>
      </Container>
    </div>
  )
}

export default App