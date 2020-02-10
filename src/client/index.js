import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return <h1>This is surprise test. Hope I passed</h1>

  }
}

render(<App />, document.getElementById('root'));