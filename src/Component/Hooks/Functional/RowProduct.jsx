import React from 'react'
import { 
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody,Col
  }  from  'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../../CartContext';

function RowProduct() {

    const {value, setValue} = useContext(CartContext)
    return (
        <Col>
        <br/>
       <CardDeck>
         <br/>
        <Card>
        <CardImg top width="100%" src="https://media.pricebook.co.id/article/5565a4a2140ba0fb0d16ab21/5565a4a2140ba0fb0d16ab21_1529641000.jpg" alt="Card image cap" />
        <CardBody>
          <h5><CardTitle>ASUS X454YA-BX801T</CardTitle></h5>
          <h3><CardSubtitle>Rp.3.890.000</CardSubtitle></h3>
          <CardText>Untuk aplikasi desain, multimedia, gaming mainstream hingga multi-tasking beberapa aplikasi sekaligus laptop ini bisa bekerja dengan mulus karena sudah dipersentajai dengan APU A8-7410 2.5 GHz.</CardText>
          <Button onClick={()=>setValue(value+1)}>Tambah Keranjang</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://media.pricebook.co.id/article/5565a4a2140ba0fb0d16ab21/5565a4a2140ba0fb0d16ab21_1508392795.jpg" alt="Card image cap" />
        <CardBody>
          <h5><CardTitle>Lenovo IdeaPad 110-14AST</CardTitle></h5>
          <h3><CardSubtitle>Rp.3.768.000</CardSubtitle></h3>
          <CardText>Laptop ini dilengkapi prosesor AMD Quad-Core A9-9400 dan RAM 4GB DDR3. Untuk masalah penyimpanan memiliki memori internal besar berkapasitas 1TB HDD bisa menyimpan berbagai file.</CardText>
          <Button onClick={()=>setValue(value+1)}>Tambah Keranjang</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://media.pricebook.co.id/article/59494bf1150ba07836ebf0e0/59494bf1150ba07836ebf0e0_1533873037.jpg" alt="Card image cap" />
        <CardBody>
          <h5><CardTitle>Acer Aspire 3 A314-32-C3X0</CardTitle></h5>
          <h3><CardSubtitle>Rp.3.099.000</CardSubtitle></h3>
          <CardText>Dilengkapi layar HD seluas 14 inch serta di dukung dengan VGA Intel HD Graphics, HDD berkapasitas 1TB, serta  desainnya yang ramping jarang ditemukan pada laptop dengan harga yang sama. </CardText>
          <Button onClick={()=>setValue(value+1)}>Tambah Keranjang</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://media.pricebook.co.id/article/5565a4a2140ba0fb0d16ab21/5565a4a2140ba0fb0d16ab21_1518593258.jpg" alt="Card image cap" />
        <CardBody>
          <h5><CardTitle>HP 14-BW005AU</CardTitle></h5>
          <h3><CardSubtitle>Rp.3.590.000</CardSubtitle></h3>
          <CardText>Laptop HP 14-BW005AU dilengkapi processor AMD A4-9120 dengan RAM berukuran 4GB. Selain itu, HP 14-BW005AU memiliki kualitas Integrated HD Graphics beresolusi 1366 x 768 piksel. </CardText>
          <Button onClick={()=>setValue(value+1)}>Tambah Keranjang</Button>
        </CardBody>
      </Card>
    </CardDeck>
    <br/>
    <CardDeck>

    <Card>
        <CardImg top width="100%" src="https://media.pricebook.co.id/article/5565a4a2140ba0fb0d16ab21/5565a4a2140ba0fb0d16ab21_1508390896.jpg" alt="Card image cap" />
        <CardBody>
          <h5><CardTitle>ASUS X454YA-BX801D</CardTitle></h5>
          <h3><CardSubtitle>Rp.4.338.000</CardSubtitle></h3>
          <CardText>Laptop ini dilengkapi dengan sebuah prosesor AMD Quad Core A8 7410 berkekuatan 2,5GHz, dan prosesor grafis AMD Radeon R5, RAM 4GB DDR3 dan kapasitas memori internal 500GB HDD.</CardText>
          <Button onClick={()=>setValue(value+1)}>Tambah Keranjang</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://media.pricebook.co.id/article/59494bf1150ba07836ebf0e0/59494bf1150ba07836ebf0e0_1555911784.jpg" alt="Card image cap" />
        <CardBody>
          <h5><CardTitle>Acer Aspire 3 A311-31</CardTitle></h5>
          <h3><CardSubtitle>Rp.3.385.000</CardSubtitle></h3>
          <CardText>Termasuk laptop entry level harga yang sangat terjangkau.Karena spesifikasi laptop memang lebih maksimal untuk penggunaan dasar saja.Didalamnya terdapat prosesor Celeron N4000.</CardText>
          <Button onClick={()=>setValue(value+1)}>Tambah Keranjang</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://media.pricebook.co.id/article/5565a4a2140ba0fb0d16ab21/5565a4a2140ba0fb0d16ab21_1529641000.jpg" alt="Card image cap" />
        <CardBody>
          <h5><CardTitle>ASUS X454YA-BX801T</CardTitle></h5>
          <h3><CardSubtitle>Rp.3.890.000</CardSubtitle></h3>
          <CardText>Untuk aplikasi desain, multimedia, gaming mainstream hingga multi-tasking beberapa aplikasi sekaligus laptop ini bisa bekerja dengan mulus karena sudah dipersentajai dengan APU A8-7410 2.5 GHz.</CardText>
          <Button onClick={()=>setValue(value+1)}>Tambah Keranjang</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://media.pricebook.co.id/article/5565a4a2140ba0fb0d16ab21/5565a4a2140ba0fb0d16ab21_1529640842.jpg" alt="Card image cap" />
        <CardBody>
          <h5><CardTitle>ASUS E402WA-GA001T</CardTitle></h5>
          <h3><CardSubtitle>Rp.3.338.000</CardSubtitle></h3>
          <CardText>ASUS E402WA-GA001T dimotori prosesor AMD E2-6110 dengan kecepatan 1,5 GHz, laptop ini juga didukung GPU Radeon R2 berkecepatan 500 MHz dan RAM DDR3-1600 sebesar 4 GB dan penyimpanan HDD 500GB.</CardText>
          <Button onClick={()=>setValue(value+1)}>Tambah Keranjang</Button>
        </CardBody>
      </Card>
    </CardDeck>
    <br/>
    <CardDeck>
    <Card>
        <CardImg top width="100%" src="https://media.pricebook.co.id/article/5565a4a2140ba0fb0d16ab21/5565a4a2140ba0fb0d16ab21_1518593258.jpg" alt="Card image cap" />
        <CardBody>
          <h5><CardTitle>HP 14-BW005AU</CardTitle></h5>
          <h3><CardSubtitle>Rp.3.590.000</CardSubtitle></h3>
          <CardText>Laptop HP 14-BW005AU dilengkapi processor AMD A4-9120 dengan RAM berukuran 4GB.Selain itu,HP 14-BW005AU memiliki kualitas Integrated HD Graphics beresolusi 1366 x 768 piksel. </CardText>
          <Button onClick={()=>setValue(value+1)}>Tambah Keranjang</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://media.pricebook.co.id/article/5565a4a2140ba0fb0d16ab21/5565a4a2140ba0fb0d16ab21_1518592775.jpg" alt="Card image cap" />
        <CardBody>
          <h5><CardTitle>Dell Inspiron 11-3168</CardTitle></h5>
          <h3><CardSubtitle>Rp.4.789.000</CardSubtitle></h3>
          <CardText>Dukungan memori penyimpanan sebesar 500GB bertpe SATA, ditambah lagi dengan adanya dukungan chip grafis Intel HD Graphics 405 yang telah tersemat di dalamnya tentu kinerja grafis yang dihasilkannya akan semakin jernih dan tajam.</CardText>
          <Button onClick={()=>setValue(value+1)}>Tambah Keranjang</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://media.pricebook.co.id/article/5565a4a2140ba0fb0d16ab21/5565a4a2140ba0fb0d16ab21_1498042446.jpg" alt="Card image cap" />
        <CardBody>
          <h5><CardTitle>Lenovo IdeaPad 100-15IBD</CardTitle></h5>
          <h3><CardSubtitle>Rp.4.658.000</CardSubtitle></h3>
          <CardText>Lenovo IdeaPad 100-15IBD merupakan laptop murah RAM 4GB yang memenuhi kebutuhan pekerjaan dan komputasi sehari-hari berkat adanya CPU N3540 serta GPU.</CardText>
          <Button onClick={()=>setValue(value+1)}>Tambah Keranjang</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://media.pricebook.co.id/article/5565a4a2140ba0fb0d16ab21/5565a4a2140ba0fb0d16ab21_1482425665.jpg" alt="Card image cap" />
        <CardBody>
          <h5><CardTitle>ASUS A455LA-WX667D</CardTitle></h5>
          <h3><CardSubtitle>Rp.4.838.000</CardSubtitle></h3>
          <CardText> Bagi kamu yang ingin laptop  murah  berkualitas dengan  body yang tipis,  ASUS A455LA-WX667D bisa menjadi pilihan. Layarnya menggunakan panel LED backlight seluas 14 inch beresolusi HD.</CardText>
          <Button onClick={()=>setValue(value+1)}>Tambah Keranjang</Button>
        </CardBody>
      </Card>
    </CardDeck>
        </Col>
        
    )
}

export default RowProduct