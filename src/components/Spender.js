  
    import React, {Component} from 'react'
    import { Button, Form, FormGroup, Col, Label, Input, FormText } from 'reactstrap';

    class Spender extends Component
    {

 state = {
       spender_email: []
   }

 _onSubmit=(e)=>{
    e.preventDefault();   
    this.props.apiLogin(this.state)
 }
        

    render() {
      return (
        
    <Form onSubmit={this._onSubmit} style={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
      {this.props.loginError && <p>Email and/or password is incorrect</p>}
      <FormGroup row style={{marginBottom: "0"}}>
        <Col>
          <Input onChange={this._onChange} value={this.state.email} name="spender_email" type='email' placeholder='email' />
        </Col>
        <Col>
          <Input onChange={this._onChange} value={this.state.password} name="spender_password" type='password' placeholder='password' />
        </Col>
        <Col>
          <Button type='submit'>Sign in</Button>            
        </Col>
      </FormGroup>
    </Form>

      )
      
    }  
}

export default Spender