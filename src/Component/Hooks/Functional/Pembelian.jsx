import { Container, Row,Col, Card, CardImg, Button} from 'reactstrap'
import React, { useReducer } from 'react'
import { NavLink} from 'react-router-dom'
import { useContext} from 'react'
import { keranjangContext} from '../../../App'

function Pembelian() {

    const countContext = useContext (keranjangContext)
    return (
        <Container>
            <br/>
            <Row>
                <Col xs="6"> 
                <Card>
                <CardImg top width="100%" src="https://media.pricebook.co.id/article/5565a4a2140ba0fb0d16ab21/5565a4a2140ba0fb0d16ab21_1529641000.jpg" alt="Card image cap" />
                </Card>
                </Col>
                <Col xs="6">
                    <h3>ASUS X454YA-BX801T</h3>
                    <p>Harga</p>
                    <h3>Rp. 3.890.000</h3>
                    <p>Jumlah</p>
                    <Row>
                        <Col><Button onClick={()=> countContext.keranjangDispatch({type:'tambah'})} color="danger">+</Button></Col>
                        <Col>{countContext.keranjangState.jumlah}</Col>
                        <Col><Button onClick={()=> countContext.keranjangDispatch({type:'kurang'})}>-</Button></Col>
                    </Row>
                    <br/>
    <Button color="info" size="lg">Total Rp. {countContext.keranjangState.hargatotal}</Button>
    <hr/>
    <NavLink to='/tagihan'>Tagihan Belanja</NavLink>
                </Col>
            </Row>
            
        </Container>

    )
}

export default Pembelian
