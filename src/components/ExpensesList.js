import React, { Component } from 'react';
import ExpensesBasket from './ExpensesBasket';

  

class ExpensesList extends Component {
  state={
    
    ExpensesInCart: []
 } 

    render(){
      let cartedExpenses = this.props.Expenses.map(expense => {
     return <ExpensesBasket key={expense.id} expense={expense} addexpenseToCart={this.props.addexpenseToCart} />
      })
                          
                           
                           console.log("expenseList; ", this.cartedExpenses)

          
                  return (
                            <div>
                           {cartedExpenses} 
                              </div>                                         
             
                  )
    }
}

export default ExpensesList