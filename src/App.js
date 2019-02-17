import React from 'react';
import Routes from './Routes';

// Redux
import { Provider } from 'react-redux';
import store from './Store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}
export default App;
