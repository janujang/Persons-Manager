import React, {useEffect} from 'react';
import classes from './Cockpit.module.css'

const Cockpit = props => {
    //can add multiple useEffects with anonymous functions
    useEffect(()=>{
      console.log('[Cockpit.js] useEffect');
      setTimeout(()=>{
        alert('Saved data to cloud');
      },1000);
    },[props.persons]);
  
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons){
        btnClass=classes.Red;
    }
    
    if(props.persons.length <=2){
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <=1){
      assignedClasses.push(classes.bold);
    }
    return (
      //scoping of classes (scope Cockpit class)
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}> This works!</p>
            <button className={btnClass}
            onClick={props.clicked}>Switch Name</button>
        </div>
    );
};

export default Cockpit;