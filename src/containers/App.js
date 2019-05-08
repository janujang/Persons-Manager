import React, { Component } from 'react';
import classes from  './App.module.css';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass'
  
class App extends Component {
  constructor(props){
    super(props) //execute constructor of component that is extended
    console.log('[App.js] constructor'); //see from which file the App.js stems
  }
  state =  {
    persons: [
      {id: 'asf1',  name: 'Max', age: 28},
      {id: 'asf21', name: 'Garry', age: 29},
      {id: 'asf11', name: 'Bob', age: 32}
    ],
    otherState: 'some other value',
    showPersons:false
  };

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }

  // switchNameHandler = (newName) => {
  // //console.log('was clicked!')
  //   this.setState({
  //     persons: [
  //       {name: newName, age: 28},
  //       {name: 'Manu', age: 1234},
  //       {name: 'Chicken', age: 32}
  //     ]
  //   })
  // }

  deletePersonHandler = (personIndex) => {
    //copies full array
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});

  }

  nameChangedHandler = (event, id) => {
    //find person index
    const personIndex = this.state.persons.findIndex(p => {
      return p.id == id;
    });

    //copy person object
    const person = {
      ...this.state.persons[personIndex]
    };
    
    person.name = event.target.value;

    //copy persons array
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }
  togglePersonsHandler = (event) =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  render(){
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons){
      //jsx code
      persons =
        //map persons array to jsx by taking a function and applying to every element in the array
        //list of persons as opposed to individual person components
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>;
    }
    
    return( 
        //<div className={classes.App}>
        <WithClass classes={classes.App}>
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonsHandler}/>
            {persons}
        </WithClass>
    );
  }
    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi min gmong'));
  
}


export default App;

