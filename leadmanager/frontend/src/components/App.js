import React from 'react'
import ReactDOM from 'react-dom'
import Header from './layout/Header'
import Dashboard from './leads/Dashboard'

class App extends React.Component {
  render() {
    return <>
      <Header />
      <div className="container">
        <Dashboard />
      </div>
    </>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))