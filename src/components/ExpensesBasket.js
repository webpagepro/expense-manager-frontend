import React, { Component } from 'react'
import { Button } from 'reactstrap'
//import axios from 'axios'

const sbutton = {
    styles: {
    
    }
}
const rightColumn = {
    styles: {
        backgroundColor:'Orange',
        color:'#fff',
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
    console.log("expenseCart: this props expensesInCart ", this.props.expense)



        return this.props.expense ?(
            
            <div className="rightColumn" style={rightColumn.styles}> 
            <div className="name-cart">Expense:&nbsp;&nbsp;{this.props.expense.expense_name}</div>
              <div className="price-cart">Cost:&nbsp;&nbsp;${parseFloat(this.props.expense.expense_amount)}</div>
              <div className="button-cart"><Button onClick={() => this.props.removeexpenseFromCart(this.props.expense.id)} style={sbutton.styles}>Remove {this.props.expense.id}</Button></div>
   </div> 
      
         ):(<div>loading</div>)
         }
        }  
    
export default expenseCart;