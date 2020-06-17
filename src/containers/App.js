import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';



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
    let person  = null;

    if (this.state.showPersons) {
      person = (
            <Persons
            clicked = {this.deletePersonHanler}
            changed = {this.nameChangeHandler}
            persons = {this.state.persons}
            />
      );
    }

    

    return (
      <div className="App">
       <Cockpit
        showPersons = {this.state.showPersons}
        persons = {this.state.persons}
        clicked = {this.tooglePersonHadle}
       />
        {person}
       
      </div>
    );
  }
}

export default App;
