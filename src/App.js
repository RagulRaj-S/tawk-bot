import React from 'react';
import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/Nav';

 class App extends React.Component{

   render(){
    return(
      <Router>
        <Route exact path="/">
          <Nav />
          <Home />
        </Route>
      </Router>
    );  
    }
 }

export default App;
