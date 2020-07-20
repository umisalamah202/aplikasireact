import React from 'react'
import {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container} from 'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';

function HomePage() {
    
    return (
      <Container>
        <hr/>
                <Card  body inverse color="info">
                <h1>WELLCOME TO LAPTOP COUNTER</h1>
                </Card>
        
        <div>
          <br/>
        <Card>
          <CardImg top width="100%" src="https://laptopcounter.net/wp-content/uploads/2019/09/LOGO.png" alt="Card image cap" />
          <CardBody>
           
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
      </Container>
    )
}

export default HomePage;

