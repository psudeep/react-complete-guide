import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  //state is mananged from inside a component which extends Component class
  state = {
    persons: [
      {name: 'Prashant', age: '29'},
      {name: 'Sipu', age: '31'},
      {name: 'Sahiba', age: '28'},
    ],
    isAuthenticated: false,
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really work</p>
        <button>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>is racing</Person>
        <Person name="Sahiba" age="28" />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now ??'));
  }
}

export default App;
