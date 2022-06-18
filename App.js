import React, { Component } from 'react';
import'./App.css';
import Person from './Person';
import Form from './Form';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      persons : [
        {
            name: "  Naseer Ahmed",
            age : "   68",
      },
      {
        name: "   Mussarrat Naseer",
        age : "   53",
  },
  {
    name: "  kashif Naseer",
    age : "  38",
},
{
  name: "  Ishrat Naseer",
  age : "  35",
},
],
isShow : true,
    };
    this.togglehandler = this.togglehandler.bind(this);
  }
  togglehandler(){
    this.setState({isShow: !this.state.isShow});
  }
 removeHandler = (personIndex) => {
  const persons = this.state.persons;
  persons.splice(personIndex,1)
  this.setState({persons: persons})

};
  render() {
    let persons;
    persons = this.state.persons.map((p , index) => {
      console.log(this.state.isShow);
      return <Person key={index} name={p.name} age={p.age} remove={() => this.removeHandler(index)} />;
    });
    return (
      <div className='App'>
        <button onClick={this.togglehandler}>Toggle</button>
        {
        this.state.isShow === true ? persons : ""
        }
        <Form />
        </div>
    );
  }
}