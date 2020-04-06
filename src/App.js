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

  switchNameHandler = (newName) => {
    console.log('was clicked');
    // DOM't DO THIS this.state.persons[0] = 'Prashant Sudeep';
    this.setState({
      persons: [
        {name: newName, age: '29'},
        {name: 'Sipu', age: '31'},
        {name: 'Sahiba', age: '24'},
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <nav className="navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/users">Users</a></li>
            <li><a href="/admin">Admin</a></li>
          </ul>
        </nav>
        <h1>Hi, I am a React App</h1>
        <p>This is really work</p>
        <button onClick={() => this.switchNameHandler('Sipu Kumar')}>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Prashant Sudeep')}
          >
            is racing
          </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
        />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now ??'));
  }
}

export default App;
