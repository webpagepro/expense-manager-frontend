import React, { Component } from 'react';
import canvas from './canvas.png';
import Search from './components/Search.js';
import Header from './components/Header.js';
import Footer from './components/Footer';
import './App.css';
//import TopNavBar from './components/TopNavBar';
//import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
//import Chart from 'chart.js'
import axios from 'axios';
import { Container, Row, Col, Card } from 'reactstrap';
//import Charts from './components/Charts';
import Spender from './components/Spender';
import Register from './components/Register';
import ExpensesList from './components/ExpensesList'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import RegisterContainer from './components/RegisterContainer';

class App extends Component {
 
  _apiLogin=(spender)=>{
    fetch('http://localhost:8006/spenders/login')
    .then(res => res.json())
    .then(spender => console.log(spender))
  }
  
  state = {
    expenses: [],
    senders: []
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8006/expenses')
    const json = await response.json()
     if(!response)
     {
      console.log("failed api response")
     }  
      console.log("async: ", this)
      this.setState({expenses: json}) 
  }
 
  addExpenseToDebtList = id => {
    axios.patch(`http://localhost:8082/api/expenses/debt/add/${id}`)
    .then(res => {
      let otherExpenses = this.state.expenses
    this.setState({ expenses: [...otherExpenses.filter(expense => expense.id !== id), res.data]})
  console.log("App.js - addExpenseToBasket: ", this)
    })
  }

  removeExpenseFromDebtList = id => {
    axios.patch(`http://localhost:8082/api/expenses/debt/remove/${id}`)
    .then(res => {
      let otherExpenses = this.state.expenses
    this.setState({ Expenses: [...otherExpenses.filter(expense => expense.id !== id), res.data]})
  console.log("App.js - removeExpenseFromDebt: ", res.data)
    })
  }


  render() {
    return (
<Router> 
 
<div className="App">
    <Container>
     
      <Header/>
      <Switch>
      <Route path='/' render={props => (
        <Spender apiLogin={this._apiLogin} {...props}/>
  )}/>
     
        <Route exact path='/spender' component={Register} />
        <Route path='/register' component={Register} />

      </Switch>

      <Row> <img src={canvas} alt="React is Retarded"/></Row>
     
    
     <Route path='/expenses'  component={ExpensesList}/>
    <Footer copy="2019"/>
   </Container>
    </div>
 
</Router>
    )
    }

}

export default App;
