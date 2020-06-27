import React, { Component } from 'react';
import Person from '../Persons/Person/Person';


class  Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps', props);
    //     return state;
    //   }

    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillReceiveProps', props);
    //   }

      shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate', nextProps);
        return nextProps.persons !== this.persons ? true : false;
      }

      getSnapshotBeforeUpdate(props, state) {
        console.log('[Persons.js] getSnapshotBeforeUpdate', props);
        return {message: 'Snapshot!!'};
      }

      componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
      }
      
      
    render () {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return (
                <Person 
                    click = {() => this.props.clicked(index)}
                    name = {person.name} 
                    age =  {person.age}
                    key = {person.id}
                    change = {(event) => this.props.changed(event, person.id)}/>);
                })};
    }

export default Persons;