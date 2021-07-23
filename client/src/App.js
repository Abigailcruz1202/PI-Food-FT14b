import React from 'react';
import './App.css';
import {BrowserRouter, Route, Router } from 'react-router-dom';
import Landing from './components/LandingPage/Landing';
import Home from './components/Home/Home';
import RecipeDetail from './components/RecipeDetail/RecipeDetail'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route path='/home' component={Home} />
      <Route path='/recipe/:id' component={RecipeDetail} />
    </BrowserRouter>
  );
}

export default App;

