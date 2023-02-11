import React from 'react';
import Signup from './components/Signup';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Container className='d-flex align-items-center justify-content-center mt-3'
      style={{minHeight: "100vh"}}>
        <div className='w-100'
        style={{maxWidth: "400px"}}>
          <Signup/>
        </div>
      </Container>
    </div>
  );
}

export default App;
