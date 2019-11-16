import React from 'react';
import './App.css';
import Auth from './components/Auth'
import Dashboard from './components/Dashboard'
import Form from './components/Form'
import Post from './components/Post'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Auth />
      <Dashboard />
      <Form />
      <Post />
      <Nav />
    </div>
  );
}

export default App;
