import React, { Component } from "react";
import './App.css';
import Header from './Header/Header';
import Searchtype from './Searchtype/Searchtype'




class App extends Component {
  render(){
  return (
    <div>
      <Header />
      <Searchtype/> 
      <Results/>
    </div>
  );
  }
}

export default App;
