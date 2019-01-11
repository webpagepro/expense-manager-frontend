import React, { Component } from 'react';
import Expense from './Expense';
import Charts from './Charts'

  

class ExpensesList extends Component {
  state={
    
    expensesInBasket: []
 } 

    render(){
      let storedExpenses = this.props.expenses.map(expense => {
     return <Expense key={expense.id} expense={expense} removeExpenseFromDebtList={this.props.removeExpenseFromDebtList} />
      })
                          
                           
                           console.log("ExpenseList; ", this.storedExpenses)

          
                  return (
                            <div>
    <Charts expenses={this.props.expenses} />
                           {storedExpenses} 

                              </div>                                         
             
                  )
    }
}

export default ExpensesList