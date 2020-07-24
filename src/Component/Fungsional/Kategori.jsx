import React from 'react'
import {Card, Button, CardTitle, CardText, Row, Col,CardImg, Container } from 'reactstrap';
import CardComp from './CardComp';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';

function Kategori() {
    
    return (
        <Container>
            <br/>
            <Card  body inverse color="secondary">
                <h1>KATEGORI</h1>
                </Card>
                <br/>
        
        <Row>
            <Col sm="4">
            <Card>
                <CardImg top width="100%" src="https://thumbs.dreamstime.com/t/acer-logo-chorzow-poland-may-brand-black-laptop-company-established-taiwan-148943177.jpg" alt="Card image cap" />
                </Card>
        <Card body inverse color="info">
          <h1><CardTitle>ACER</CardTitle></h1>
          
        </Card>
        </Col>
        </Row>
        <br/>
        <Row>
            <Col sm="4">
            <Card>
                <CardImg top width="100%" src="https://asset.kompas.com/crops/J_310YyfbGKrucwaVgqqJRD4jyc=/114x32:492x284/750x500/data/photo/2020/06/03/5ed73583bdb60.jpg" alt="Card image cap" />
                </Card>
        <Card  body inverse color="info">
          <h1><CardTitle>ASUS</CardTitle></h1>
          <h3><CardText>With supporting text below as a natural lead-in to additional content.</CardText></h3>
        </Card>
      </Col>
        </Row>
        <br/>
        <Row>
            <Col sm="4">
            <Card>
                <CardImg top width="100%" src="https://kliknklik.com/blogs/wp-content/uploads/2015/06/550x-lenovo-brand-logo.jpg" alt="Card image cap" />
                </Card>
                <Card body inverse color="secondary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      </Col>
        </Row>
        <br/>
        <Row>
            <Col sm="4">
            <Card>
                <CardImg top width="100%" src="https://media.hitekno.com/thumbs/2019/10/07/74124-ilustrasi-logo-hp-pixabayguillaume-preat/350x230-img-74124-ilustrasi-logo-hp-pixabayguillaume-preat.jpg" alt="Card image cap" />
                </Card>
        <Card  body inverse color="info">
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>Withhjikopkkklkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkh supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
        </Row>
        </Container>
    )
}

export default Kategori