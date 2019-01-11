import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';



class  Charts extends React.Component{

render() {
console.log("Charts: ", this)
	const data = {
	labels: 
		this.props.expenses.map(expense => expense.expense_description),
		
	
	datasets: [{
		data: this.props.expenses.map(expense => expense.expense_amount),
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56',
		'#ccc',
		'#333',
		'#F38F64'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};
    return (
      <div>
        <h2>Pie Example</h2>
        <Pie data={data} />
      </div>
    );
  }
};



export default Charts