var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./components/canvasjs.react.js');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
	render() {
		const options = {
			title: {
				text: "Basic Column Chart"
			},
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{ label: "Gas",  y: 10  },
					{ label: "Food", y: 15  },
					{ label: "Rent/Mortgage", y: 25  },
					{ label: "Utilities",  y: 30  },
					{ label: "Entertainment",  y: 28  }
				]
			}
			]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		<CanvasJS options = {options} />
    
    </div>
		);
	}
}
//module.exports = App;                              
export default Chart