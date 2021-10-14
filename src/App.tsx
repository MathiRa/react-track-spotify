import React from 'react';
import './App.css';
import Seeker from './components/seeker';
import Login from './components/login/login';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <><BrowserRouter>
          <Route exact path="/" component={Login} />
          <Route exact path="/search" component={Seeker} />
    </BrowserRouter>
    </>
  );
}

export default App;
