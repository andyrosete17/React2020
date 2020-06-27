import React, {Component} from 'react';
import './Person.css';
import styled from 'styled-components';
import Aux from '../../../hoc/Auxi.js';
import withClass from '..//../../hoc/withClass';
import PropTypes from 'prop-types';

const StyleDiv =  styled.div`
width: 60%;
margin: 16px auto;
border: 1px solid #eee;   
padding: 16px;
text-align: center;
box-shadow: 0 2px 3px #ccc;

@media (min-width: 500px) {
    width: 450px;
}
`;

class Person extends Component  {
    render () {
        console.log('[Person.js] rendering...');
        return(
        // <div className = 'Person'>ç
        <Aux>
            <StyleDiv>
                <p onClick = {this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type = 'text' onChange={this.props.change} value ={this.props.name}/>
            </StyleDiv>
        </Aux>    
        )

    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person ) ;