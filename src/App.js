import React, { Component } from 'react';
import './stylesheets/main.scss';
import Header from './components/header';
import Gallery from './components/gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="GridMain">
      <Header />
      <Gallery />
      </div>
      </div>
    );
  }
}

export default App;
