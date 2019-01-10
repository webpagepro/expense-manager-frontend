import React, { Component } from 'react';
import canvas from './canvas.png';
import Search from './components/Search.js';
import Header from './components/Header.js';
import Footer from './components/Footer';
import './App.css';
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js';
import axios from 'axios';
import { Container, Row, Col, Card } from 'reactstrap';

//import Charts from './components/Charts'

class App extends Component {

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/')
    const json = await response.json()
     if(!response)
     {
      console.log("failed api response")
     }  
      console.log("async: ", this)
      this.setState({expenses: json}) 
  }
  
  addExpenseToBasket = id => {
    axios.patch(`http://localhost:8005/api/expenses/${id}/add`)
    .then(res => {
      let otherExpenses = this.state.Expenses
    this.setState({ expenses: [...otherExpenses.filter(expense => expense.id !== id), res.data]})
  console.log("App.js - addExpenseToBasket: ", this)
    })
  }

  removeExpenseFromBasket = id => {
    axios.patch(`http://localhost:8005/api/expenses/${id}/remove`)
    .then(res => {
      let otherExpenses = this.state.Expenses
    this.setState({ Expenses: [...otherExpenses.filter(expense => expense.id !== id), res.data]})
  console.log("App.js - removeExpenseFromBasket: ", res.data)
    })
  }


  render() {
    return (
      <div className="App">
      <Container>
     <Header/>
     <Search className="search" filterCameraSearch={this.filterCameraSearch} />
    <div className="main-title">Welcome Samuel</div>
        <header className="App-header">
          <img src={canvas} className="App-logo" alt="logo" />
          
         <div className="chartOne" chart_one = {ReactChartkick.addAdapter(Chart)} />
        </header>
  
    <Footer copy="2019"/>
    </Container>
</div>

) 
   

}
}

export default App;
