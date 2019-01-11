import React, { Component } from 'react';
import Expense from './Expense';

  

class ExpensesList extends Component {
  state={
    
    expensesInBasket: []
 } 

    render(){
      let storedExpenses = this.props.expenses.map(expense => {
     return <Expense key={expense.id} expense={expense} addExpenseToDebtList={this.props.addExpenseToDebtList} />
      })
                          
                           
                           console.log("ExpenseList; ", this.storedExpenses)

          
                  return (
                            <div>
                           {storedExpenses} 
                              </div>                                         
             
                  )
    }
}

export default ExpensesList