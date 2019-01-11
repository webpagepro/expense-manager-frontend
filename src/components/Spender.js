  
    import React, {Component} from 'react'
    import { Button, Form, FormGroup, Col, Label, Input, FormText } from 'reactstrap';

    class Spender extends Component
    {

 state = {
       spender_email: 'one@test.com',
       spender_password: 'Passw0rd'
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
          <Input onChange={this._onChange} value={this.state.email} name="email" type='email' placeholder='email' />
        </Col>
        <Col>
          <Input onChange={this._onChange} value={this.state.password} name="password" type='password' placeholder='password' />
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