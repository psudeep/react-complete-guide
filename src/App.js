import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really work</p>
        <Person name="Prashant" age="29" />
        <Person name="Sipu" age="31">is racing</Person>
        <Person name="Sahiba" age="28" />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now ??'));
  }
}

export default App;
