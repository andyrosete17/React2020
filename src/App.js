import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};;
    color: black;
  }
  `;

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Max', age: 28},
      {id: '2', name: 'Manu', age: 32},
      {id: '3', name: 'Stefi', age: 26}
    ], 
    otherState: 'some other value',
    showPersons:false
  }

  
  nameChangeHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person ={
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

deletePersonHanler = (personIndex) =>{
  // const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}

  tooglePersonHadle = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons : !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer' 
    };

    let person  = null;

    if (this.state.showPersons) {
      person = (
          <div>
            {this.state.persons.map((person, index) => {
              return (
                <Person 
                  click = {() => this.deletePersonHanler(index)}
                  name = {person.name} 
                  age =  {person.age}
                  key = {person.id}
                  change = {(event) => this.nameChangeHandler(event, person.id)}/>);
                })}
            </div>
      );

      // style.backgroundColor = 'red';
      // style [':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    const classes = [];

    if (this.state.persons.length <= 2){
      classes.push('red');
    }
    if (this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi react</h1>
        <p className = {classes.join(' ')} >This is really working</p>
        <StyledButton alt = {this.state.showPersons}
          onClick={this.tooglePersonHadle}>Toogle Persons
        </StyledButton>
        {person}
       
      </div>
    );
  }
}

export default App;
