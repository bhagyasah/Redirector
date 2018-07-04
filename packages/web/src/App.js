import React, { Component } from 'react';
import Home from './screens/home/';
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';
import '../node_modules/@blueprintjs/datetime/lib/css/blueprint-datetime.css';
import '../node_modules/@blueprintjs/select/lib/css/blueprint-select.css';
import './styles/index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
