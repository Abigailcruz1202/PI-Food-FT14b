import React from 'react';
import './App.css';
import {BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/LandingPage/Landing';
import Home from './components/Home/Home';
import RecipeDetail from './components/RecipeDetail/RecipeDetail'
import NavBar from './components/NavBar/NavBar';
import FilterAZ from './components/Filter/FilterAZ';
import FilterZA from './components/Filter/FilterZA';
import TypesDiets from './components/TypesDiets/TypesDiets';
import Form from './components/AddRecipe/AddRecipeForm';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route path='/' component={NavBar}/>
      <Route path='/home' component={Home} />
      <Route path='/recipe/:id' component={RecipeDetail} />
      <Route path='/filter-a-z' component={FilterAZ} />
      <Route path='/filter-z-a' component={FilterZA} />
      <Route path='/typesdiets' component={TypesDiets} />
      <Route path='/createrecipe' component={Form} />
    </BrowserRouter>
  );
}

export default App;

