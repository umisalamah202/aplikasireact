import React from 'react';
import { FormGroup, Label, Input, Container,Col,Button } from 'reactstrap';
import { NavLink} from 'react-router-dom'



function Register() {

    
    return (
        <Container>
            <br/>
            <h1>From Register</h1>
            <br/>
            
            <Col xs="6">
            <FormGroup>
        <Label for="exampleusername">Username</Label>
        <Input type="username" name="username" id="exampleusername" placeholder="username" />
      </FormGroup>
             <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="email" />
      </FormGroup>
      </Col>
      <Col xs="6">
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password" />
      </FormGroup>
      <FormGroup>
        <Label for="examplekonfirmasipassword">Konfirmasi Password</Label>
        <Input type="konfirmasipassword" name="konfirmasipassword" id="examplekonfirmasipassword" placeholder="konfirmasi password" />
      </FormGroup>
      <hr/>
    <NavLink to='/login'><Button>Register</Button></NavLink> 
      </Col>
        </Container>
    )
}

export default Register
