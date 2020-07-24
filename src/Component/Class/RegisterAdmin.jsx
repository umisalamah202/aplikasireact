import React from 'react';
import { FormGroup, Label, Input, Container,Col,Button, Row,CardImg,Card } from 'reactstrap';
import { NavLink} from 'react-router-dom'



function RegisterAdmin() {

    
    return (
        <Container>
            <br/>
            <h1>From Register Admin</h1>
            <Row>
            <Col xs="6">
            <FormGroup>
        <Label for="exampleusername">Nama Lengkap</Label>
        <Input type="namalengkap" name="namalengkap" id="examplenamalengkap" placeholder="masukan nama lengkap" />
      </FormGroup>
             <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="masukan email" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="masukan password" />
      </FormGroup>
      <FormGroup>
        <Label for="examplealamat">Alamat</Label>
        <Input type="alamat" name="alamat" id="examplealamat" placeholder="masukan alamat" />
      </FormGroup>
      <FormGroup>
        <Label for="examplenomortelepon">Nomor Telepon</Label>
        <Input type="nomortelepon" name="nomortelepon" id="examplekonfirmasipassword" placeholder="masukan nomor telepon" />
      </FormGroup>
      <hr/>
    <NavLink to='/loginadmin'><Button>Register</Button></NavLink> 
      </Col>
      
      <Col xs="5"> 
                <Card>
                <CardImg top width="100%" src="https://2.bp.blogspot.com/-65qnUPvkIYg/VP0FcCocItI/AAAAAAAAAH8/pXG75aMh9PM/s1600/showimage.aspx.gif" alt="Card image cap" alt="Card image cap" />
                </Card>
       </Col>
     
      </Row>
        </Container>
    )
}

export default RegisterAdmin
