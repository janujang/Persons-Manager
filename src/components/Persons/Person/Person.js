import React from 'react'
import classes from './Person.module.css';
import Aux from '../../../hoc/aux'


const person = (props) => {

    return (
        // <div className="Person" >
        //     <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
        //     <p>{props.children}</p>
        //     <input type="text" onChange={props.changed} value={props.name}/>
        // </div>

        //empty wrapper
        //can use React.Fragment
        <Aux>
            <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </Aux>

    )
};

export default person;