import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// class App extends Component {

const app = (props) => {

  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Prashant', age: '29'},
      {name: 'Sipu', age: '31'},
      {name: 'Sahiba', age: '28'},
    ],
    //isAuthenticated: false,
  });

  const [isAuthenticatedState, setAuthState] = useState({
    isAuthenticated: true,
  });

  console.log(personsState, isAuthenticatedState);

  const switchNameHandler = () => {
    console.log('was clicked');
    // DOM't DO THIS this.state.persons[0] = 'Prashant Sudeep';
    setPersonsState({
      persons: [
        {name: 'Prashant Sudeep', age: '29'},
        {name: 'Sipu', age: '31'},
        {name: 'Sahiba', age: '24'},
      ],
      isAuthenticated: isAuthenticatedState.isAuthenticated,
    });
  }

  //state is mananged from inside a component which extends Component class
  
  return (
    <div className="App">
      <h1>Hi, I am a React App</h1>
      <p>This is really work</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age} 
      />
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}>
          is racing
        </Person>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age} 
      />
    </div>
  );
}

export default app;
