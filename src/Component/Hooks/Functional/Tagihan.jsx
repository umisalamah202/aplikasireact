import React, {useContext} from 'react'
import { Container } from 'reactstrap'
import { Jumbotron, Button } from 'reactstrap';
import { keranjangContext } from '../../../App';

function Tagihan() {
    const countContext = useContext(keranjangContext)
    return(
        <Container>
            <br/>
            <br/>
        <Jumbotron>
        <h1 className="display-3">Tagihan</h1>
        <h1 className="lead">({countContext.keranjangState.jumlah}x) ASUS X454YA-BX801T</h1>
        <hr className="my-2" />
        <h4>Harga Total Rp. {countContext.keranjangState.hargatotal}.</h4>
        <p className="lead">
          <Button color="info">Lanjutkan pembayaran</Button>
        </p>
      </Jumbotron>

        </Container>

    )
}

export default Tagihan