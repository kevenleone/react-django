import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import store from '../redux/store';

class App extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Header />
          <div className="container">
            <Dashboard />
          </div>
        </Provider>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
