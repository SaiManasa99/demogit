import React from 'react';
import ReactDOM from 'react-dom';
class MyForm extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		username: '',
		age: null,
	  };
	}
	myChangeHandler = (event) => {
		let nam;
		let val;
		let v1=document.getElementById('error');
		let v2=document.getElementById('ageerror');
		//window.alert(v);
		if(event.target.name.length > 3){
			  nam = event.target.name;
			  v1.innerHTML=' ';	
		}else
			v1.innerHTML='Name must be > than 3 characters';
		
		if(event.target.value > 18){
	  val = event.target.value;
	  		v2.innerHTML=' ';
		}else
		v2.innerHTML='Age must be > than 18';

	  this.setState({[nam]: val});
  }
  save=(event)=>{
    window.alert("name :"+this.state.name);
    window.alert("age :"+event.target.value);
  }
	render() {
	  return (
		<form onSubmit={this.save}>

		<h1>Hello {this.state.username} {this.state.age}</h1>
		<p>Enter your name:</p>
		<input
		  type='text' required="required" //HTML5 feature
		  name='username'
		  onChange={this.myChangeHandler}
		/>
		<p>Enter your age:</p>
		<input
		  type='text'
		  name='age' required //HTML5 feature
		  onChange={this.myChangeHandler}
		/><br/>
		<b style={{color : "red"}} id="error"></b><br/>
		<b style={{color : "red"}} id="ageerror"></b><br/>
		<input type="submit" value="Save" />
		
		</form>
	  );
	}
  }
export default MyForm;
