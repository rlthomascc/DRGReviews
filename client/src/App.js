/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Routes from './Routes';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
  }


  renderView() {
    return <Routes />;
  }

  render() {
    return (
      this.renderView()
    );
  }
}

export default App;
