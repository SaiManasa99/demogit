import React from 'react';
import './App.css';

class EmployeeForm extends React.Component {
  constructor(props){
    super(props);
    console.log("Employee form");
    this.state= {username:' ',length:''};
  };
  storeName=(event)=>{
    this.setState({username:event.target.value});
    this.setState({length:event.target.value.length});
  }  
  render(){
  return (
    <div>
      <form>
        <h1>user name : {this.state.username}</h1>
        <b>You Name : </b><input type='text'  onChange={this.storeName}/><br/>
        <b># of characters : {this.state.length}</b>
      </form>
    </div>
  );
  }
}

export default EmployeeForm;
