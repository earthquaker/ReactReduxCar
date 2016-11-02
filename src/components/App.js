import React, { Component } from 'react';

import CheckoutHeader from './checkout/CheckoutHeader.react';
import CheckoutContainer from './checkout/CheckoutContainer.react';

class App extends Component {
  render() {
    return (
        <div>
            <CheckoutHeader />
            <CheckoutContainer />
        </div>
    );
  }
}

export default App;
