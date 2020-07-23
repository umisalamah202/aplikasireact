import React from 'react'
import { Container, Row,Card } from 'reactstrap'
import RowProduct from './RowProduct'

function ProductComp() {
    return (
        <div>
            <Container>
                <hr/>
                <Card  body inverse color="warning">
                <h1>PRODUK</h1>
                </Card>
                <Row>
                    <RowProduct/>
                </Row>
            </Container>
        </div>

    )
}

export default ProductComp