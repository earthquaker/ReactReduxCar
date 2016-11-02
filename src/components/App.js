import React, { Component } from 'react';
import '../styles/App.scss';

import Header from './checkout/Header.react';
import Container from './checkout/Container.react';

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <Container />
        </div>
    );
  }
}

export default App;
