import React, { Component } from 'react'
import { Button } from 'reactstrap'
//import axios from 'axios'

const sbutton = {
    styles: {
    
    }
}
const rightColumn = {
    styles: {
        backgroundColor:'White',
        color:'Blue',
        fontWight:'bold',
        top:'-64px',
        position:'relative',
        right:'-1%'

    }
}

class expenseCart extends Component {
    
state={
   // expenses: []
   totalPrice: ''
} 


 render(){ 
//.toFixed(2)..reduce((acc, expense) => acc + (expense.inCart * expense.price), 0)
    console.log("Expense: this props this ", this)



        return this.props.expense ?(
            
            <div className="rightColumn" style={rightColumn.styles}> 
             <div className="name-cart">Spender:&nbsp;&nbsp;{this.props.expense.spender_name}</div>
            <div className="name-cart">Expense:&nbsp;&nbsp;{this.props.expense.expense_description}</div>
              <div className="price-cart">Cost:&nbsp;&nbsp;${parseFloat(this.props.expense.expense_amount)}</div>
              <div className="button-cart"><Button onClick={() => this.props.removeExpenseFromDebtList(this.props.expense.id)} style={sbutton.styles}>Remove {this.props.expense.id}</Button></div>
   </div> 
      
         ):(<div>Expense JS loading</div>)
         }
        }  
    
export default expenseCart;