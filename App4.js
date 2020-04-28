import React from 'react';
import ReactDOM  from 'react-dom';
const list = [
	{
		id:"a",
		fname:"sai",
		lname:"manasa",
		year:1990
	},
	{
		id:"b",
		fname:"manvitha",
		lname:"b",
		year:1991
	},
	{
		id:"c",
		fname:"siri",
		lname:"chandana",
		year:1993
	}
];
function NumberList(props) {
	//const numbers = props.numbers;
	
	return (
	  <ul>
		  {list.map(item=>
			<li key={item.id}>
				<div>{item.id}</div>
				<div>{item.fname}</div>
				<div>{item.lname}</div>
				<div>{item.year}</div>
			</li>
			)}
	  </ul>
	);
  }
  
  export default NumberList;