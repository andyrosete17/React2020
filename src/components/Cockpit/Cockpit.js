import React, {useEffect, Fragment } from 'react';
import styled from 'styled-components';

const Cockpit = (props) => {
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
            }`;

    const classes = [];

    if (props.persons.length <= 2){
      classes.push('red');
    }
    if (props.persons.length <= 1){
      classes.push('bold');
    }


    useEffect( () => {
      console.log('[Cockpit.js] useEffect');
      const timer = setTimeout( () => {
        alert('Data saved in cloud');
      }, 1000);
      return () => {
        clearTimeout(timer);
        console.log('[Cockpit.js] cleanup work in useEffect');
      }
    }, []);

    useEffect (() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');
      }

    });

    return (
        <Fragment>
            <h1>Hi react</h1> 
            <p className = {classes.join(' ')} >This is really working</p>
            <StyledButton alt = {props.showPersons}
            onClick={props.clicked}>Toogle Persons
            </StyledButton>
        </Fragment>
    );
};

export default Cockpit;