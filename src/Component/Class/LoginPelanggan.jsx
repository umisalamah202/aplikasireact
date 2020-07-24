import React from 'react';
import { NavLink} from 'react-router-dom'

import {
     Container,Card,CardImg,Col,Row,Label,FormGroup,Input,Button
  } from 'reactstrap';

function LoginPelanggan() {

    
    return (
        <Container>
            
            <br/>
            <Row>
                <Col xs="6"> 
                <Card>
                <CardImg top width="100%" src="https://laptopcounter.net/wp-content/uploads/2019/09/LOGO.png" alt="Card image cap" alt="Card image cap" />
                </Card>
                </Col>
                <Col xs="6">
                <h1>Form Login Pelanggan</h1>

                <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="email" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password" />
      </FormGroup>
      
      <hr/>
    <NavLink to='/'><Button color="info">Login</Button></NavLink> <NavLink to='/registerpelanggan'><Button color="warning">Register</Button></NavLink>
    <hr/>
    
    <hr/>
   
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPelanggan
