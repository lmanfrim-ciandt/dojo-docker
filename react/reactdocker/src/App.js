import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    result: []
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ result: res }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/my-api');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
	          { this.state.result.map( (item, key) => (
               <h1 key={key}>{item}</h1>
              ))}
      </div>
    );
  }
}

export default App;
