import React, {useEffect, Fragment, useRef } from 'react';
import styled from 'styled-components';
import AuthContext from '../../context/auth-context';

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

    if (props.personsLength <= 2){
      classes.push('red');
    }
    if (props.personsLength <= 1){
      classes.push('bold');
    }

    //To use ref in functional componnets
    const toggleBtnRef = useRef(null);
    

    useEffect( () => {
      console.log('[Cockpit.js] useEffect');
      // const timer = setTimeout( () => {
      //   console.log('Data saved in cloud');
      // }, 1000);
      toggleBtnRef.current.click();
      return () => {
        // clearTimeout(timer);
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
            <StyledButton 
             alt = {props.showPersons}
             onClick={props.clicked}
             ref= {toggleBtnRef}
             >Toogle Persons
            </StyledButton>
            <AuthContext.Consumer>
              {
                (context) => 

                <StyledButton
                onClick = {context.login}
                >Login</StyledButton>
              }
              </AuthContext.Consumer>
        </Fragment>
    );
};

export default React.memo(Cockpit);