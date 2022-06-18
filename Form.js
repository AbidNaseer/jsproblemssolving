import React, { Component } from 'react'

 class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
          name: null,
          country: null,
        };
    }
submitHandler = (event) =>{
  event.preventDefault();
  console.log(this.state);
  const name = event.target.name.value;
  const country = event.target.country.value;
  this.setState({name, country}, ()=>{
    console.log(this.state);
  })
};

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <label htmlFor="">Name</label>
            <br />
        <input type="text" name='name'/>
        <br />
        <label htmlFor="">Country</label>
        <select name='country'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form