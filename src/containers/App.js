import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux  from '../hoc/Auxi';
import withClass  from '../hoc/withClass';


class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {id: '1', name: 'Max', age: 28},
      {id: '2', name: 'Manu', age: 32},
      {id: '3', name: 'Stefi', age: 26}
    ], 
    otherState: 'some other value',
    showPersons:false,
    showCockpit: true, 
    changeCounter: 0
  }

static getDerivedStateFromProps(props, state) {
  console.log('[App.js] getDerivedStateFromProps', props);
  return state;
}

// componentWillMount () {
//   console.log('[App.js] componentWillMount');
// }

componentDidMount () {
  console.log('[App.js] componentDidMount');
}

shouldComponentUpdate (nextProps, nextState) {
  console.log('[App.js] shouldComponentUpdate');
  return true;
}

componentDidUpdate () {
  console.log('[App.js] componentDidUpdate');
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
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
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
    console.log('[App.js] render');
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
        <Aux>
          <button onClick= {() =>{ 
            this.setState({showCockpit: false});
              }}>Remove Cockpict</button>
              {this.state.showCockpit ? (
            <Cockpit
              showPersons = {this.state.showPersons}
              personsLength = {this.state.persons.length}
              clicked = {this.tooglePersonHadle}
            /> ): null}
            {person}
        </Aux>
    );
  }
}

export default withClass(App, "App");
