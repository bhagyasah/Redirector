import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import schemaReducer from './reducers/schemaReducer';
import Home from './screens/';
import '../../../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import '../../../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';
import '../../../node_modules/@blueprintjs/datetime/lib/css/blueprint-datetime.css';
import '../../../node_modules/@blueprintjs/select/lib/css/blueprint-select.css';
import './styles/index.css';


export const store = createStore(combineReducers({
  schema: schemaReducer('WWBoard', 'Contact', 'Inbox', 'Outbox', 'CalLog'),
}), applyMiddleware(thunk));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <Provider store={store}>
          <Home />
        </Provider>
      </div>
    );
  }
}

export default App;
