import React, { Component } from 'react';
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react.js');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Charts extends Component {	
	render() { console.log("this.props.expenses: ", this.props.expenses)
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "dark2", // "light1", "dark1", "dark2"
			title:{
				text: "Trip Expenses"
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}%",		
				startAngle: -90,
				dataPoints: [
					{ y: 20, label: "Gasoline" },
					{ y: 24, label: "Entertainment" },
					{ y: 20, label: "Rent / Mortgage" },
					{ y: 14, label: "Utilities" },
					{ y: 12, label: "Groceries" },
					{ y: 10, label: "Misc" }	
				]
			}] 
		}
		return   (
          //  return this.props.id ?(
			 
          
		<div>
			<CanvasJSChart options = {options} 
			/*	onRef={ref => this.chart = ref} */
			/>
            <CanvasJS />
		</div>
            )
       
    
	}
}
 
export default Charts                      