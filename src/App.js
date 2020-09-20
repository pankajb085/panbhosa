import React, { Component } from 'react';
import './App.css';
import SmartSearch from './SmartSearch'
class App extends Component {

  state = {
    privilege : "",
    noOfItems : 0,
    countryList: []
  }

  componentDidMount() {
    fetch("http://13.57.235.126:5000/countries").then(res => res.json())
    .then(data => {
      this.setState({countryList : data.countries})
    }).catch(err => console.log(err))
  }

  handleChange =  event => {
   const {name, value} = event.target;
   this.setState({
     [name] : value
   });
 }

 addAndSelectHandler = () =>{

 }

  render() {
    return (
      <div className="App">
        <fieldset>
          <legend>Enter Guest/Admin & No of Items:</legend>
          <label htmlFor="users">Guest/Admin:</label>&nbsp;
          <select value={this.state.privilege} name="privilege" onChange={this.handleChange}>
            <option value="">--Select--</option>
            <option value="admin">Admin</option>
            <option value="guest">Guest</option>
          </select><br /><br />
          <label htmlFor="noOfItems">No Of Items: </label>&nbsp;&nbsp;
          <input type="number" min="0" name="noOfItems" value={this.state.noOfItems} onChange={this.handleChange}/>
          <p>User Selected country</p>
        </fieldset><br/>
        { this.state.privilege !== "" ?
        <SmartSearch countryList={this.state.countryList} privilege={this.props.privilege}
        noOfItems={this.state.noOfItems} addAndSelectHandler={this.props.addAndSelectHandler} /> : null}
      </div>
      );
  }
}

export default App;
